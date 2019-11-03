function moveTo(pos) {
    if (pos == 0) document.getElementsByClassName("doublewide")[0].style.marginLeft = "0";
    if (pos == 1) document.getElementsByClassName("doublewide")[0].style.marginLeft = "-100%";
    for (let e of document.getElementsByClassName('text-btn')) {
        e.classList.add('inactive');
    }
    document.getElementsByClassName('text-btn')[pos].classList.remove('inactive');
}

function verifyUname() {
    if (document.getElementById("suForm").elements.suuser.value == "abc") return false;
    else return true;
}

function verifyPWC() {
    if (document.getElementById("suForm").elements.supw.value != document.getElementById("suForm").elements.supwc.value) return false;
    else return true;
}

function verify() {
    if (verifyUname() && verifyPWC()) untoast(0);
    else {
        let msg = "";
        if (!verifyUname()) msg += "Username is already taken";
        if (!verifyUname() && !verifyPWC()) msg += "<br>";
        if (!verifyPWC()) msg += "Passwords do not match";
        toast(msg, "error");
    }
}

function pageLoaded() {
    getTheme();
}