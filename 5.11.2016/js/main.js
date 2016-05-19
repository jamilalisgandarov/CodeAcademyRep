    var uzunluq = [200, 300, 150];
    var hundurluk = [200, 400, 200];
    var reng = ["black", "blue", "gray"];
    var sentences = ["LoremBritish scientists were crucial to the success of the Manhattan Project, which developed the first atomic bombs during World War II. After Rudolf Peierls and Otto Frisch at the University of Birmingham calculated that a small sphere of pure uranium-235 could explode with the power of thousands of tons of dynamite, their memorandum led to Britain's own atomic bomb project. This project shared research with the US, but was eventually subsumed by the Manhattan Project under the 1943 Quebec Agreement. A British mission led by the Australian physicist Mark Oliphant assisted in the development of electromagnetic separation processes for enriching uranium; Wallace Akers led a similar mission assisting with gaseous diffusion. James Chadwick (pictured) was the head of a distinguished team of British scientists working on bomb design at the Los Alamos Laboratory that included Niels Bohr, Peierls, Frisch, Geoffrey Taylor, and James Tuck, as well as Klaus Fuchs, who was later revealed to be a Soviet atomic spy. American and British cooperation ended with the Atomic Energy Act of 1946. In October 1952, Britain became the third country to test an independently developed nuclear weapon ", "Lorem", "Lorem"];
    var divs = function(width, height, color, text) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.text = text;
    }
    for (i = 0; i < uzunluq.length; i++) {
        var div1 = new divs(uzunluq[i], hundurluk[i], reng[i], sentences[i]);
        if (div1.text.length > 300) {
            document.write("<div style='width:" + div1.width + "px;height:" + div1.height + "px;overflow:hidden;background-color:" + div1.color + "'><p >" + div1.text + "</p></div>")
        } else {
            document.write("<div style='width:" + div1.width + "px;height:" + div1.height + "px;background-color:" + div1.color + "'>" + div1.text + "</div>");
        }
    }
