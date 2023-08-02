//persegi
var luasPersegi = function () {
    var nilaix = document.getElementById("panjang").value;
    let luas = 0
    if(nilaix > 0){
        luas = nilaix * nilaix
        document.getElementById("luas").innerHTML = luas;
    } else {
        document.getElementById("luas").innerHTML = `nilai tidak boleh ${luas}`;
    }
  };
  
  document.getElementById("hitung").addEventListener("click", luasPersegi);

//persegi panjang
var luasPersegipanjang = function () {
    var nilaix = document.getElementById("panjangx").value;
    var nilaiy = document.getElementById("lebary").value;
    var luas = 0
    if(nilaix >0 && nilaiy >0){
        luas = nilaix * nilaiy
        document.getElementById("luaspersegipanjang").innerHTML = luas;
    } else {
        document.getElementById("luaspersegipanjang").innerHTML = `nilai tidak boleh ${luas}`;
    }
  };
  
  document.getElementById("hitungluaspersegipanjang").addEventListener("click", luasPersegipanjang);


//volume balok
var luasPersegipanjang = function () {
    var nilaix = document.getElementById("pvolumex").value;
    var nilaiy = document.getElementById("lvolumey").value;
    var nilaiz = document.getElementById("tvolumez").value;
    var luas = 0
    if(nilaix > 0 && nilaiy > 0 && nilaiz > 0){
        luas = nilaix * nilaiy * nilaiz
        document.getElementById("resultvolumebalok").innerHTML = luas;
    } else {
        document.getElementById("resultvolumebalok").innerHTML = `nilai tidak boleh ${luas}`;
    }
  };
  
  document.getElementById("hasilbalok").addEventListener("click", luasPersegipanjang);


//mesin pintar
var mesinpintar = function () {
    var nilaix = document.getElementById("px").value;
    var nilaiy = document.getElementById("ly").value;
    var nilaiz = document.getElementById("tz").value;
    var luas = 0

    if(nilaix > 0 && nilaiy == 0 && nilaiz == 0){
        luas = nilaix * nilaix
        document.getElementById("resultmesin").innerHTML = luas;

    } else if(nilaix > 0 && nilaiy > 0 && nilaiz == 0) {
        luas = nilaix * nilaiy
        document.getElementById("resultmesin").innerHTML = luas;

    } else if(nilaix > 0 && nilaiy > 0 && nilaiz > 0) {
        luas = nilaix * nilaiy * nilaiz
        document.getElementById("resultmesin").innerHTML = luas;

    } else{
        document.getElementById("resultmesin").innerHTML = `nilai tidak boleh ${luas}`;
    }
  };
  
  document.getElementById("hasilmesinpintar").addEventListener("click", mesinpintar);