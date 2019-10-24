function moveTo(pos) {
    if (pos == 0) document.getElementsByClassName("doublewide")[0].style.marginLeft = "0";
    if (pos == 1) document.getElementsByClassName("doublewide")[0].style.marginLeft = "-100%";
    for (let e of document.getElementsByClassName('text-btn')) {
        e.classList.add('inactive');
    }
    document.getElementsByClassName('text-btn')[pos].classList.remove('inactive');
}

function pageLoaded() {
    getTheme();
}