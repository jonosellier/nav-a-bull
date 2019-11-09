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
    let btn = document.getElementById("suBtn");
    if (verifyUname() && verifyPWC()) {
        untoast(0);
        btn.disabled = false;
    } else {
        let msg = "";
        if (!verifyUname()) msg += "Username is already taken";
        if (!verifyUname() && !verifyPWC()) msg += "<br>";
        if (!verifyPWC()) msg += "Passwords do not match";
        toast(msg, "error");
        btn.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    if (vars.error == 'badcredentials')
        document.getElementById('error-msg').innerText = 'Error: That username/password combination did not match our records. Please try again.';
}); 

function pageLoaded() {
    getTheme();
}