var x = "#yeao";
y = x.split("#");
y = y.join("");
console.log(y)
window.addEventListener("resize", myFunction());

function myFunction() {
    winHeight = window.height;
    myHref = myId.getAttribute("href");
    y = myHref.split("#");
    y = myHref.join("");
    document.getElementById(y).style.height = winHeight + "px";
}


function myClick(myId) {
	winHeight = window.height;
    myHref = myId.getAttribute("href");
    y = myHref.split("#");
    y = myHref.join("");
    document.getElementById(y).style.height = winHeight + "px";
}
