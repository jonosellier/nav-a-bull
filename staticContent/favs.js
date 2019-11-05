var clickX;
var clickY;

async function populateFavs() {
    const loginInfo = JSON.parse(localStorage.getItem('currLogin'));
    let page = document.getElementById("place-list");
    const res = await fetch("/datafile.json?id=" + loginInfo.uid);
    const favObj = await res.json();
    page.innerHTML = '';
    for (const place in favObj) {
        page.innerHTML += `<h3>${place}</h3>`;
        if (Array.isArray(favObj[place]))
            for (const e of favObj[place]) page.innerHTML += `<li id="favorite-list-item" class="mdc-list-item"><span class="mdc-list-item__graphic material-icons" aria-hidden="true">star</span> <span id="favorite-list-item-text" class="mdc-list-item__text">${e}</span> <span aria-hidden="true" class="mdc-list-item__meta"><button class="mdc-icon-button material-icons" onclick="onClickFavMenu(this, '${e}', '${place}')">more_vert</button></span> </li>`;
        else page.innerHTML += `<li class="mdc-list-item"><h2><span class="material-icons h2-icon" aria-hidden="true">${place.toLowerCase()}</span> ${favObj[place]}</h2> <span aria-hidden="true" class="mdc-list-item__meta"><button class="mdc-icon-button material-icons" onclick="onClickFavMenu(${'eh'})">more_vert</button></span></li>`;
    }
}

// populate the location selection option list in the "Add Place" popup
async function populateLocations() {
    const response = await fetch('/places.json');
    const placesArray = await response.json();
    let contents;
    for (const place of placesArray) {
        contents += `<option value="${place.name}">${place.name}</option>`;
    }
    document.getElementById('place').innerHTML = `
    <option value="myLoc" disabled selected hidden>Select a place</option>
    ` + contents;
}

// populate the category selection option list in the "Add Place" popup
async function populateCategories() {
    const response = await fetch('./categories.json');
    const catArray = await response.json();
    let contents;
    for (const cat of catArray) {
        contents += `<option value="${cat}">${cat}</option>`;
    }
    document.getElementById('category').innerHTML = `<option value="empty cat" disabled selected hidden>Select a category</option>` + contents;
}

// show/hide "Add Place" popup
const onClickAddPlace = () => {
    document.getElementById('add-place-popup').style.display = 'block';
    document.getElementById('darken-bg').style.display = 'block';
};

// Add event listener to each fav list item
const attachListeners = (list) => {
    for (i = 0; i < list.length; i++) {
        const l = list[i];
        l.addEventListener('click', (event) => {
            // Only perform action if the element tapped was the text or whitespace in the list item
            if (event.target.id.includes('favorite-list-item')) {
                console.log(event.target);
            }
        });
    }
};

// Action when more_vert menu button on each fav is pressed
const onClickFavMenu = (elem, loc, cat) => {
    rect = elem.getBoundingClientRect();
    popup = document.getElementById('remove-place-popup');
    // Make popup appear next to the more_vert menu button which was pressed
    popup.style.display = 'block';
    popup.style.top = `${rect.top}px`;
    popup.style.right = `0px`;
    // Darken the background
    document.getElementById('darken-bg').style.display = 'block';
    // Populate the form to make a POST request to remove location from favorites
    updateElem('place-remove', loc);
    updateElem('category-remove', cat);
};

// Add values to form for remove favLocation query
const updateElem = (elem, val) => {
    return new Promise((res, rej) => {
        document.getElementById(elem).value = val;
    });
};

// When darkened background is clicked, close any popup
function closePopups() {
    document.getElementById('remove-place-popup').style.display = 'none';
    document.getElementById('add-place-popup').style.display = 'none';
    document.getElementById('darken-bg').style.display = 'none';
    document.getElementById("nav-panel").style.left = "-100%";
}

function attachID() {
    const loginInfo = JSON.parse(localStorage.getItem('currLogin'));
    document.getElementById('idHolder').value = loginInfo.uid;
    document.getElementById('idHolder2').value = loginInfo.uid;
}

function pageLoaded() {
    getTheme();
    showHideNav();
    populateFavs()
        .then(() => document.getElementsByClassName('mdc-list-item'))
        .then((list) => attachListeners(list));
    populateLocations();
    populateCategories();
    showLoggedInContent();
    attachID();
}