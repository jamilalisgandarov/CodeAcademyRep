$(document).ready(function() {
    $(".clock_key, .minute_key")
        .css({
            "transition": "3s ease"
        });
});

function clear_anim() {
    $(".clock_key, .minute_key").css({ "transition": "" })
}
setInterval(clear_anim, 10000);
clearInterval(clear_anim);


var clockRadius = document.getElementsByClassName("clockRadius")[0];

function creator() {
    for (i = 1; i <= 30; i++) {
        var divs = document.createElement("div");
        clockRadius.appendChild(divs);
        var divLarge = document.createElement("div");
        clockRadius.appendChild(divLarge);
        if (i % 5 == 0) {
            divLarge.style.width = "2px";
            divLarge.style.zIndex = "2";
            var degreeL = 6 * i;
            divLarge.style.transform = 'rotate(' + degreeL + 'deg)'
                // console.log(i)

        }
        divLarge.setAttribute("class", "divLarge");
        var degree = 6 * i;
        divs.setAttribute("class", "rad1");
        divs.style.transform = 'rotate(' + degree + 'deg)'
    }
}
creator();



var secondkey = document.getElementsByClassName('second_key')[0];

var minutekey = document.getElementsByClassName('minute_key')[0];

var clockkey = document.getElementsByClassName('clock_key')[0];

function mysecond() {
    var localClock = new Date();
    var localSecond = localClock.getSeconds();
    var localMinute = localClock.getMinutes();
    var localHours = localClock.getHours();

    for (i = 0; i <= localSecond; i++)
        var degreeSec = 6 * localSecond;
    secondkey.style.transform = 'rotate(' + degreeSec + 'deg)';

    var degreeMin = 6 * localMinute;
    minutekey.style.transform = 'rotate(' + degreeMin + 'deg)';

    var degreeHours = 30 * localHours + localMinute / 2;
    clockkey.style.transform = 'rotate(' + degreeHours + 'deg)';

}
// setInterval(mysecond, 1000)
