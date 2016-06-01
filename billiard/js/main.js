// function random() {
//     var min = 1,
//         max = 500;
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand
// }
// var ball = document.getElementsByClassName("ball")[0];
// var x = 0;
// var y = 0;

// function z() {
//  var ctx = c
// .getContext("2d");
//     ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
//     var ranNum = random();
//     var interval = setInterval(justFunc, 10);
//     randomHeight = Math.floor(Math.random() * 10);
//     randomLeft = Math.floor(Math.random() * 10);
//     console.log(randomHeight + " " + randomLeft);

//     function justFunc() {
//         ball.arc(ranNum, ranNum, 40, )
//     }
// }
var boardX = 800;
var boardY = 500;
var centerX = 400;
var centerY = 250;
var radius = 20;
var ballDx = 4;
var ballDy = 4;
velocity = 4;
var acceloration = -0.1;
var fps = 20;
var animation;

function drawingBall() {
    var ctx = document.getElementById("myCanvas");
    var play = ctx.getContext("2d");
    play.clearRect(0, 0, ctx.width, ctx.height);
    centerX = centerX + ballDx;
    velocity = velocity + acceloration * 0.1;
    ballDx = ballDx + acceloration * 0.1;
    centerY = centerY + ballDy;
    ballDy = ballDy + acceloration * 0.1;
    play.beginPath();
    play.arc(centerX, centerY, radius, 0, Math.PI * 2);
    play.stroke();
    play.fillStyle = "red";
    play.fill();
    if (centerY > boardY - radius || centerY - radius < 0) {
        ballDy = -1 * ballDy;

    }
    if (centerX > boardX - radius || centerX < radius) {

        ballDx = -1 * ballDx;
    }

    if (velocity == 0 || velocity < 0) {
        ballDx = 0;
        ballDy = 0;
        acceloration = 0;
    }
    fps = fps + acceloration;
}

function animate() {
    clearInterval(animation);
    setInterval(drawingBall, fps);
    console.log(fps)
}
