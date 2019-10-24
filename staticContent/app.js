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