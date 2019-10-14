var map;
var curPosCoords;
var curPosMarker;

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

function initMap() {
    var markerArray = [];

    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService();

    // Create a map and center it on Manhattan.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 28.063325, lng: -82.4135998 },
        gestureHandling: 'greedy',
        disableDefaultUI: true
    });

    // Create a renderer for directions and bind it to the map.
    var directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

    // Instantiate an info window to hold step text.
    var stepDisplay = new google.maps.InfoWindow();

    // Display the route between the initial start and end selections.
    calculateAndDisplayRoute(
        directionsRenderer, directionsService, markerArray, stepDisplay, map);
    // Listen to change events from the start and end lists.
    var onChangeHandler = function() {
        calculateAndDisplayRoute(
            directionsRenderer, directionsService, markerArray, stepDisplay, map);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);

    var currLoc;
    var locArray = [];
    if (navigator.geolocation) {
        var markerImage = {
            url: './img/icons/marker.svg',
            anchor: new google.maps.Point(15, 15),
            origin: new google.maps.Point(0, 0),
            size: new google.maps.Size(30, 30),
            scaledSize: new google.maps.Size(24, 24)
        };
        curPosMarker = new google.maps.Marker({
            position: new google.maps.LatLng(0, 0),
            map: map,
            icon: markerImage
        });
        navigator.geolocation.getCurrentPosition(setCurPos);
        navigator.geolocation.watchPosition(setCurPos);
    } else alert("Location permission needed. Please allow and restart the app.");
}

function recenterMap() {
    map.panTo(curPosCoords);
}

function setCurPos(pos) {
    curPosCoords = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    curPosMarker.setPosition(curPosCoords);
}

function calculateAndDisplayRoute(directionsRenderer, directionsService, markerArray, stepDisplay, map) {
    document.getElementById("directions-panel").innerHTML = ``;
    // First, remove any existing markers from the map.
    for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(null);
    }

    // Retrieve the start and end locations and create a DirectionsRequest using
    // WALKING directions.
    let startLoc = "";
    if (document.getElementById('start').value == "" || document.getElementById('end').value == "") return;
    if (document.getElementById('start').value == "myLoc") {
        startLoc = curPosCoords;
    } else startLoc = document.getElementById('start').value;
    directionsService.route({
        origin: startLoc,
        destination: document.getElementById('end').value,
        travelMode: 'WALKING'
    }, function(response, status) {
        // Route the directions and pass the response to a function to create
        // markers for each step.
        if (status === 'OK') {
            document.getElementById('warnings-panel').innerHTML =
                '<b>' + response.routes[0].warnings + '</b>';
            directionsRenderer.setDirections(response);
            showSteps(response, markerArray, stepDisplay, map);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function showSteps(directionResult, markerArray, stepDisplay, map) {
    // For each step, place a marker, and add the text to the marker's infowindow.
    // Also attach the marker to an array so we can keep track of it and remove it
    // when calculating new routes.
    var myRoute = directionResult.routes[0].legs[0];
    for (var i = 0; i < myRoute.steps.length; i++) {
        var marker = markerArray[i] = markerArray[i] || new google.maps.Marker();
        marker.setMap(map);
        marker.setPosition(myRoute.steps[i].start_location);
        attachInstructionText(
            stepDisplay, marker, myRoute.steps[i].instructions, map);
    }
}

function attachInstructionText(stepDisplay, marker, text, map) {
    google.maps.event.addListener(marker, 'click', function() {
        // Open an info window when the marker is clicked on, containing the text
        // of the step.
        stepDisplay.setContent(text);
        stepDisplay.open(map, marker);
    });
    document.getElementById("directions-panel").innerHTML += `<p>${text}</p>`;
}

function showHideNav() {
    if (document.getElementById("nav-panel").style.left == "-100%") {
        document.getElementById("nav-panel").style.left = "0";
        document.getElementById("darken-bg").style.display = "block";
    } else {
        document.getElementById("nav-panel").style.left = "-100%";
        document.getElementById("darken-bg").style.display = "none";
    }
}

function pageLoaded() {
    showHideNav();
    mdc.autoInit();
}

function moveTo(pos) {
    if (pos == 0) document.getElementsByClassName("doublewide")[0].style.marginLeft = "0";
    if (pos == 1) document.getElementsByClassName("doublewide")[0].style.marginLeft = "-100%";
    for (let e of document.getElementsByClassName('text-btn')) {
        e.classList.add('inactive');
    }
    document.getElementsByClassName('text-btn')[pos].classList.remove('inactive');
}

async function populateFavs() {
    let page = document.getElementById("place-list");
    const res = await fetch("/datafile.json");
    const favObj = await res.json();
    page.innerHTML = '';
    for (const place in favObj) {
        page.innerHTML += `<h3>${place}</h3>`;
        if (Array.isArray(favObj[place]))
            for (const e of favObj[place]) page.innerHTML += `<li class="mdc-list-item"><span class="mdc-list-item__graphic material-icons" aria-hidden="true">star</span> <span class="mdc-list-item__text">${e}</span> <span aria-hidden="true" class="mdc-list-item__meta"><button class="mdc-icon-button material-icons">more_vert</button></span> </li>`;
        else page.innerHTML += `<li class="mdc-list-item"><h2><span class="material-icons h2-icon" aria-hidden="true">${place.toLowerCase()}</span> ${favObj[place]}</h2> <span aria-hidden="true" class="mdc-list-item__meta"><button class="mdc-icon-button material-icons">more_vert</button></span></li>`;
    }
}