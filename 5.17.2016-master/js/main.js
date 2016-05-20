// var counter = setInterval(function() { saat() }, 1000);

// function saat() {
//     var data = new Date();
//     document.open();
//     document.write("Saat:" + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
//     document.close();
// }



// function saat() {
//     document.open();
//     document.write("<div class='main' style='height:100%;width100%;background:black'><button onclick='div2()'>CLICK HERE</button></div>");
//     document.close();
// }

// function div2() {
//     document.open();
//     document.write("<div class='main' style='height:100%;width100%;background:orange'><button onclick='saat()'>CLICK HERE</button></div>")
//     document.close();
// }

function pic() {
    document.open();
    document.write("<div class='image'><div class='childimage'><img src='https://pixabay.com/static/uploads/photo/2016/01/14/01/41/image-view-1139204_960_720.jpg'</div><button onclick='pic2()'>Left</button><button onclick='pic2()'>Right</button></div>");
    document.close();
}

function pic2() {
    document.open();
    document.write("<div class='image'><div class='childimage'><img src='http://i.imgur.com/RRUe0Mo.png'</div><button onclick='pic()'>Left</button><button onclick='pic()'>Right</button></div>");
    document.close();
}
