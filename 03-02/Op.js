//Luas dan keliling Persegi Panjang

var luasPersegiPanjang = function () {
  var panjang = document.getElementById("panjang").value;
  var lebar = document.getElementById("lebar").value;
  var luas = panjang * lebar;
  document.getElementById("luas").innerHTML = luas;
};

document.getElementById("hitung").addEventListener("click", luasPersegiPanjang);

var kelilingPersegiPanjang = function () {
  let panjangKel = document.getElementById("panjangkel").value;
  let luasKel = document.getElementById("lebarkel").value;
  var keliling = 2 * panjangKel + 2 * luasKel;
  document.getElementById("keliling").innerHTML = keliling;
};

document
  .getElementById("hitungkel")
  .addEventListener("click", kelilingPersegiPanjang);

//Luas dan keliling Segitiga

var kelilingSegitiga = function () {
  let sisi1 = document.getElementById("a").value;
  let sisi2 = document.getElementById("b").value;
  let sisi3 = document.getElementById("c").value;
  let keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
  document.getElementById("hasil").innerHTML = keliling;
};

document
  .getElementById("hitungsegitiga")
  .addEventListener("click", kelilingSegitiga);


var luasSegitiga = function () {
  let sisi1 = document.getElementById("d").value;
  let sisi2 = document.getElementById("e").value;
  let luas = sisi1 * sisi2 / 2
  document.getElementById("hasilsegi").innerHTML = luas;
};

document
  .getElementById("hitungluassegitiga")
  .addEventListener("click", luasSegitiga);


var luasLingkaran = function () {
  let jarijari = document.getElementById("f").value;
  let luas = 3.14 * jarijari * jarijari
  let keliling = 3.14 * jarijari * 2
  document.getElementById("hasilling").innerHTML = luas;
  document.getElementById("hasillingkel").innerHTML = keliling;
};

document
  .getElementById("hitungluaslingkaran")
  .addEventListener("click", luasLingkaran);

  var luasBalok = function () {
    let panjang = document.getElementById("g").value;
    let lebar = document.getElementById("h").value;
    let tinggi = document.getElementById("i").value;
    let luas = 2 * ((parseInt(panjang)*parseInt(lebar)) + (parseInt(panjang)*parseInt(tinggi)) + (parseInt(lebar)*parseInt(tinggi)))
    let volume = panjang * lebar * tinggi
    document.getElementById("luasbalok").innerHTML = luas;
    document.getElementById("volumebalok").innerHTML = volume;
  };
  
  document
    .getElementById("hitungbalok")
    .addEventListener("click", luasBalok);


  var luasvolumetabung = function () {
    let jaritabung = document.getElementById("j").value;
    let tinggitabung = document.getElementById("k").value;
    let volume = 3.14 * jaritabung * jaritabung * tinggitabung
    let luas = 2 * 3.14 * jaritabung * (parseInt(jaritabung) + parseInt(tinggitabung))
    document.getElementById("volumetabung").innerHTML = volume;
    document.getElementById("luastabung").innerHTML = luas;
  };
  
  document
    .getElementById("hitungtabung")
    .addEventListener("click", luasvolumetabung);
