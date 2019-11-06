// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
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

function getTheme() {
    if (localStorage.getItem('usr-theme-pref') == 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.setAttribute('data-theme', 'light');
}

function toggleTheme() {
    if (localStorage.getItem('usr-theme-pref') == 'dark') localStorage.setItem('usr-theme-pref', 'light');
    else localStorage.setItem('usr-theme-pref', 'dark');
    getTheme();
}

function toast(message, type) {
    if (type) {
        document.getElementById('toast').innerHTML = `<h5>${message}</h5>`;
        document.getElementById('toast').classList.add(type);
    }
    document.getElementById('toast').style.bottom = "1em";
}

function untoast(time = 0) {
    setTimeout(function() {
        document.getElementById('toast').style.bottom = "-100%";
        document.getElementById('toast').className = '';
    }, time);
}

function showLoggedInContent() {
    if (localStorage.getItem('loggedIn') == "true") {
        let elem = document.querySelectorAll('.showIfLoggedIn');
        for (let i = 0; i < elem.length; i++) elem[i].style.display = 'flex';
        const loginInfo = JSON.parse(localStorage.getItem('currLogin'));
        document.querySelector('#usernameLabel').innerHTML = loginInfo.username;
    } else {
        let elem = document.querySelectorAll('.showIfLoggedIn');
        for (let i = 0; i < elem.length; i++) elem[i].style.display = 'none';
        elem = document.querySelectorAll('.showIfLoggedOut');
        for (let i = 0; i < elem.length; i++) elem[i].style.display = 'flex';
    }
}

function logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('currLogin', '');
    showHideNav();
    showLoggedInContent();
    window.location.href = "/";
}