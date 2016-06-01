var x = 0;
var y = 0;

function move() {

    var interval = setInterval(justFunc, 10);
    var top = document.getElementById("top");
    randomHeight = Math.floor(Math.random() * 10);
    randomLeft = Math.floor(Math.random() * 10);


    function justFunc() {

        if (x >= 560) {
            value = false;
        } else if (x <= 0) {
            value = true;
        }

        if (value == false) {
            x -= randomLeft;
            top.style.left = x + "px";
        } else {
            x += randomLeft;

            top.style.left = x + "px";
        }

        if (y >= 360) {
            value1 = false;
        } else if (y <= 0) {
            value1 = true;
        }

        if (value1 == false) {
            y -= randomLeft;

            top.style.top = y + "px";
        } else {
            y += randomLeft;

            top.style.top = y + "px";
        }

    }
}
//count = 0;

// function myMove() {

//     var elem = document.getElementById("top");
//     var x = 0;
//     var y = 0;
//     var id = setInterval(frame, 1000);


//     function frame() {
//         var width;
//         var height;
//         c = Math.round(Math.random() * 1000);
//         b = Math.round(Math.random() * 1000);

//         if (c < 360) {
//             height = c;
//             console.log(height);
//         } else if (c > 360 && c < 600) {
//             height = c - 240;
//         } else if (c > 600 && c < 800) {
//             height = c - 460;
//         } else if (c > 800 && c < 1000) {
//             height = c - 740;
//         }
//         console.log(height);

//         if (b < 560) {
//             width = b;
//             console.log(width)
//         } else if (b > 560 && b < 700) {
//             width = b - 140;
//         } else if (b > 700 && b < 1000) {
//             width = b - 440;
//         }

//         count++;
//         if (count == 1) {
//             elem.removeAttribute("style");
//             elem.style.top = 0 + "px";
//             elem.style.left = width + "px";
//             //document.getElementById("top").style.WebkitTransition = "all 0.7s";
//             console.log(count)
//         } else if (count == 2) {
//             elem.removeAttribute("style");
//             elem.style.right = 0 + "px";
//             elem.style.top = height + "px";
//             //document.getElementById("top").style.WebkitTransition = "all 0.7s";
//             console.log(count)
//         } else if (count == 3) {
//             elem.removeAttribute("style");
//             elem.style.bottom = 0 + "px";
//             elem.style.left = width + "px";
//             //document.getElementById("top").style.WebkitTransition = "all 0.7s";
//             console.log(count)
//         } else if (count == 4) {
//             elem.removeAttribute("style");
//             elem.style.left = 0 + "px";
//             elem.style.top = height + "px";
//             //document.getElementById("top").style.WebkitTransition = "all 0.7s";
//             console.log(count);
//             count = 0;
//         }

// elem.style.top = x + 'px';
// elem.style.left = width + 'px';

//     }

// }

// function a() {
//     c = Math.round(Math.random() * 1000);
//     b = Math.round(Math.random() * 1000);
//     if (b < 500 && c < 600) {
//         console.log(c + "  " + b);

//     }

// }

// function Move() {

//     var t = document.getElementById("top");
//     while( t.style.right = 0;)

// }
// setInterval(Move, 5000)
