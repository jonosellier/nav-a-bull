function pageLoaded() {
    showHideNav();
    getTheme();
    showLoggedInContent();
    getUsername();
}

function getUsername() {
    if (localStorage.getItem('loggedIn') == "true") {
        let elem = document.querySelectorAll('.showIfLoggedIn');
        for (let i = 0; i < elem.length; i++) elem[i].style.display = 'flex';
        document.querySelector('#username').innerHTML = loginInfo.username;
    } else {
        window.location.replace('/');
    }
}