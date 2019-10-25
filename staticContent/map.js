var map;
var curPosCoords;
var curPosMarker;

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

    // Reset start/end selections to default values
    // null each element in marker array and reset the array
    // Set directions with a null route
    document.getElementById('clear-route').addEventListener('click', function() {
        document.getElementById('start').selectedIndex=0;
        document.getElementById('end').selectedIndex=0;
        for (m of markerArray)
            m.setMap(null);
        m.length = 0;
        directionsRenderer.setDirections({routes: []});
    });

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

    populateLocations();
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
                `<p>0 steps taken</p>
                <p>Steps calculation here</p>` +
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

function pageLoaded() {
    getTheme();
    showHideNav();
}

async function populateLocations() {
    const response = await fetch('/places.json');
    const placesArray = await response.json();
    let contents;
    for (const place of placesArray) {
        contents += `<option value="${place.locationCode}">${place.name}</option>`;
    }
    document.getElementById('start').innerHTML = `
    <option value="myLoc" disabled selected hidden>I'm coming from...</option>
    <option value="myLoc">Current Location</option>
    ` + contents;
    document.getElementById('end').innerHTML = `
    <option value="" disabled selected hidden>I'm going to...</option>
    ` + contents;
}