var kelilingsegitiga = function(){
    var sisi1 = document.getElementById("a").nodeValue;
    var sisi2 = document.getElementById("b").nodeValue;

    var luas = sisi1 + sisi2;
    document.getElementById("kelSeg").innerHTML = luas
};

document.getElementById("hitung").addEventListener("click", kelilingsegitiga)


