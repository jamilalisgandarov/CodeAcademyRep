    var gun = prompt("Gun: ", "");
    if (gun > 31 || gun < 0) {
        alert("Duzgun daxil edin")
    } else {
        var gunlukgelir = prompt("Gunluk gelir: ", "");
        var maas = gun * gunlukgelir;
        if (maas > 1000) {
            var son = maas - maas / 4;
        } else {
            var son = maas - maas / 5;
        }
        alert("Qazanciniz : " + son);
    }
    // if (verilen >= 0 && verilen <= 35) {
    //     alert("Kafi")
    // }
    // if (verilen > 35 && verilen <= 60) {
    //     alert("Normal")
    // }
    // if (verilen > 60 && verilen <= 85) {
    //     alert("yaxsi")
    // }
    // if (verilen > 85 && verilen <= 100) {
    //     alert("Ela")
    // }
    // if (verilen > 100) {
    //     alert("Cenneti qazandiniz")
    // }
