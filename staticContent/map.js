var map;
var curPosCoords;
var curPosMarker;
var mapRotated = false;

function initMap() {
    var markerArray = [];

    // Instantiate a directions service.
    var directionsService = new google.maps.DirectionsService();

    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        //dark map
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: { lat: 28.063325, lng: -82.4135998 },
            gestureHandling: 'greedy',
            disableDefaultUI: true,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        });
    } else {
        //slight map
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: { lat: 28.063325, lng: -82.4135998 },
            gestureHandling: 'greedy',
            disableDefaultUI: true
        });
    }

    // Create a renderer for directions and bind it to the map.
    var directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

    // Instantiate an info window to hold step text.
    var stepDisplay = new google.maps.InfoWindow();

    // Display the route between the initial start and end selections.
    calculateAndDisplayRoute(directionsRenderer, directionsService, markerArray, stepDisplay, map);
    // Listen to change events from the start and end lists.
    var onChangeHandler = function() {
        if (document.getElementById('start').selectedIndex != 0
            && document.getElementById('end').selectedIndex != 0) {
            calculateAndDisplayRoute(
                directionsRenderer, directionsService, markerArray, stepDisplay, map);
        }
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);

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

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(e) {
            let compassdir;

            compassdir = event.alpha + 90;

            if (mapRotated) {
                document.getElementById("map").style.transform = `rotate(${compassdir}deg)`;
                recenterMap();
            }
        });
    }

    function startShakeDetection() {
        // set shake event
        var step = 0;
        var myShakeEvent = new Shake({
            threshold: 10,
            timeout: 10
        });
        myShakeEvent.start();
        window.addEventListener('shake', shakeEventDidOccur, false);
        
        function shakeEventDidOccur() {
            // when first shake is detected, start a timer and listen for other shakes
            let s = new Timer(500, function(res, rej) {
                window.removeEventListener('shake', shakeEventDidOccur, false);
                window.addEventListener('shake', subsequentShakeEventDidOccur, false);
            });
            // when the timer ends, if the counted shakes exceeds a certain amount, do some action
            s.catch(e => {
                window.removeEventListener('shake', subsequentShakeEventDidOccur, false);
                window.addEventListener('shake', shakeEventDidOccur, false);
                if (step > 8) {
                    if(confirm('Clear route?')) {
                        document.getElementById('start').selectedIndex = 0;
                        document.getElementById('end').selectedIndex = 0;
                        for (var i=0; i < markerArray.length; i++) {
                            markerArray[i].setMap(null);
                            markerArray[i] = null;
                        }
                        markerArray.length = 0;
                        directionsRenderer.setMap(null);
                    }
                }
                        
                step = 0;
            });
        }
        // Count additional shakes after first shake occurs
        const subsequentShakeEventDidOccur = () =>  step++;
    }

    startShakeDetection();
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

    let startLoc = "";
    if (document.getElementById('start').value == "" || document.getElementById('end').value == "") return; //not filled out yet so dont run
    if (document.getElementById('start').value == "myLoc") { //for current location
        startLoc = curPosCoords;
    } else startLoc = document.getElementById('start').value;
    directionsService.route({
        origin: startLoc,
        destination: document.getElementById('end').value,
        travelMode: 'WALKING' //always walking
    }, function(response, status) {
        // Route the directions and pass the response to a function to create
        // markers for each step.
        if (status === 'OK') {
            document.getElementById('warnings-panel').innerHTML =
                `<p>0 steps taken</p>
                <p>Steps calculation here</p>` +
                '<b>' + response.routes[0].warnings + '</b>';
            
            showSteps(response, markerArray, stepDisplay, map);
            directionsRenderer.setDirections(response);
            directionsRenderer.setMap(map);
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
    showLoggedInContent();
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

function toggleRotation() {
    mapRotated = !mapRotated;
    if (mapRotated) {
        document.getElementById('rotate-btn').innerHTML = 'near_me';
    } else {
        document.getElementById('rotate-btn').innerHTML = 'navigation';
        document.getElementById("map").style.transform = `rotate(0deg)`;
    }
}

// timer class - used for shake detection
class Timer extends Promise {
    constructor (ms, callback) {
        let haveTimeout = typeof ms === "number" && typeof callback === "function";
        let init = haveTimeout ? callback : ms;
        super((resolve, reject) => {
            init(resolve, reject);
            if (haveTimeout) {
                setTimeout(() => {
                    reject(`Timed out in ${ms}ms`);
                }, ms);
            }
        });
    }
}