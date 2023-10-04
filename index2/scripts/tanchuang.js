var popup = document.getElementById("popup");

var close = document.getElementsByClassName("close")[0];

close.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

if (document.cookie.indexOf("popupShown=true") < 0) {
    popup.style.display = "block";
    document.cookie = "popupShown=true; max-age=" + 60 * 60 * 2; // 存活时间：2小时
}