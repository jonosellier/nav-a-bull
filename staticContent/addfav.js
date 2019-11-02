function pageLoaded() {
    populateLocations();
}

async function populateLocations() {
    const response = await fetch('/places.json');
    const placesArray = await response.json();
    let contents;
    for (const place of placesArray) {
        contents += `<option value="${place.locationCode}">${place.name}</option>`;
    }

    document.getElementById('buildingSelector').innerHTML = `
    <option value="" disabled selected hidden>Building Name</option>
    ` + contents;
}