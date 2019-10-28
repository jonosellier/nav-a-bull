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

async function populateCategories() {
    const response = await fetch('./categories.json');
    const catArray = await response.json();
    let contents;
    for (const cat of catArray) {
        contents += `<option value="${cat}">${cat}</option>`;
    }
    document.getElementById('category').innerHTML = `<option value="empty cat" disabled selected hidden>Select a category</option>` + contents;
}

const onClickAddPlace = () => {
    document.getElementById('add-place-popup').classList.remove('hide');
    document.getElementById('add-place-popup').classList.add('show');
}

const onClickFav = (list) => {
    for (i=0; i<list.length; i++) {
        const l = list[i];
        l.addEventListener('click', () => {});
    }
}

function pageLoaded() {
    getTheme();
    showHideNav();
    populateFavs()
        .then(() => document.getElementsByClassName('mdc-list-item'))
        .then((list) => onClickFav(list));
    populateLocations();
    populateCategories();
}
