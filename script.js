AOS.init({
    offset: 0,
    duration: 600
});

var header = document.getElementById("header");
header.style.height = window.innerHeight + "px";

window.onresize = function () {
    header.style.height = window.innerHeight + "px";
}

var navTop = document.getElementById("navigatorTop");
var navSideBtn = document.getElementsByClassName("navigator-side-btn");

window.onscroll = function () {
    if (window.scrollY > window.innerHeight - 80) {
        navTop.style.top = "0px"
        for (var i = 0; i < 11; i++) {
            navSideBtn[i].style.visibility = "visible";
            navSideBtn[i].style.animation = `slide-right ${400 + (120 * i)}ms`;
        }
    } else if (window.scrollY == 0) {
        for (var i = 0; i < 11; i++) {
            navSideBtn[i].style.animation = "none";
            navSideBtn[i].style.visibility = "hidden";
        }
    } else {
        navTop.style.top = "-400px";
    }
}

function linkTo(id) {
    document.getElementById(id).scrollIntoView();
}