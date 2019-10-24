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

function pageLoaded() {
    showHideNav();
}