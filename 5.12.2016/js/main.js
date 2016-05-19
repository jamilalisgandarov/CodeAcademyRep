// var i = 1;
// (function jamilFunc() {
//     i++;
//     document.write("Something<br>" + i);
//     if (i != 501) {
//         jamilFunc();
//     } else {
//         document.write("done");
//     }
// })();
var sinif = {
    telebeler: ["Elshad", "QUlu", "Feride", "Kamran"],
    muellimler: ["Yolcu", "Samir", "Eldar"],
    mentorlar: [{
        seher: ["Miti", "Aysel", "Heyder"],
        gunorta: ["Orxan", "Ferid"]
    }, {
        axsam: ["Kerim", "Rehim"]
    }],
    "/*.": "It is somehting creepy",
    "1": 1
}
document.write(sinif.telebeler[2] + "<br>");
document.write(sinif.mentorlar[1].axsam[1] + "<br>");
document.write(sinif["1"] + "<br>");


for (i = 0; i < 3; i++) {
    document.write("<b>" + sinif.muellimler[i] + "<br>")
}
document.write("<i>" + sinif["/*."] + "<br>");
document.write("</b>")
document.write("Salam")
