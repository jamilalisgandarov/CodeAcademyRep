// var number = 0;
// while (number < 10) {
//     number = number + 1
//     console.log(number + "- salam dunya");
// }




// var verilen = "";
// var x = 0;
// while (x < 15) {
//     x = x + 1;
//     verilen = verilen + "#"
//     console.log(verilen)
// }



// var y = prompt("Daxil edin");
// var verilen = "";
// for (var x = 0; x < y; x = x + 1) {
//     verilen = verilen + "#"
//     console.log(verilen)
// }




// var x = Number(prompt("Baslangic araliq"));
// var y = Number(prompt("Son araliq"));
// if (x % 2 == 0) {
//     while (x <= y) {
//         x = x + 1;
//         console.log(x);
//         x = x + 1;



//     }
// } else {
//     while (x <= y) {
//         console.log(x);
//         x = x + 2;
//     }
// }



// var x = Number(prompt("Baslangic"));
// var y = Number(prompt("Son"));
// for (x; x >= y; x = x - 1) {
//     console.log(x);
// }




// var result = 1;
// var x = Number(prompt("Verilen eded"));
// var y = Number(prompt("Ustu"));
// for (var counter = 0; counter < y; counter = counter + 1) {
//     result = result * x;
// }
// console.log(result);



// var x = Number(prompt("Baslangic"));
// var y = Number(prompt("Son"));
// for (x; x >= y; x = x - 1) {
//     document.write(x + "<br>");
// }



// var x = 0;
// var y = Number(prompt("Setrin uzunlugunu daxil edin"));
// while (x < y) {
//     x = x + 1;
//     if (x % 2 == 0) {
//         document.write("# # # #");
//     } else {
//         document.write("  # # # #")
//     }
// }



// var verilen = Number(prompt("x-i daxil edin"))
// var kub = function(x) {
//     return x * x * x;
// }
// console.log(kub(verilen));



// var verilen = Number(prompt("x-i daxil edin"))
// var yoxla = function(verilen) {
//     if (verilen % 2 == 0) {
//         return "cutdur";
//     } else {
//         return "tekdir";
//     }
// }
// document.write(yoxla(verilen));


// var ad = prompt("Adinizi daxil edin");
// var soyad = prompt("Soyadinizi daxil edin");
// var adSoyad = function(ad, soyad) {
//     return ad + " " + soyad
// };
// console.log(adSoyad(ad, soyad));


// var x = Number(prompt("Ilk verilen"));
// var y = Number(prompt("Ikinci verilen"));
// var counter = function(x, y) {
//     return x * x + y
// };
// console.log(counter(x, y));

var width = prompt("Width?:");
var margin = prompt("Margin");
var hesabla = function(width, margin) {
    var child = (width - 3 * margin) / 3;
    return document.write('<div class="main" style="background-color:black; width:' + width + 'px; height:400px;">' + '<div class = "child" style="margin-left:' + margin + 'px;width:' + child + 'px">' +
        '</div>' + '<div class = "child" style="margin-left:' + margin + 'px;width:' + child + 'px">' + '</div>' + '<div class = "child" style="margin-left:' + margin + 'px;width:' + child + 'px">' + '</div>' + '</div>');
}
document.write(hesabla(width, margin));
