function luasPersegi(i, j) {
  let i = document.getElementById("in-x").value;
  let j = document.getElementById("in-y").value;
  if (i > 0 && j > 0) {
    luas = i * j;
    document.getElementById("luas").innerHTML = luas;
  } else {
    document.getElementById("luas").innerHTML = `nilai tidak boleh ${luas}`;
  }
  return luas;
}

luasPersegi(i, j)


// function luas(i, j) {
//   if (i > 0 && j > 0) {
//     k = i * j;
//     console.log(k);
//   } else {
//     console.log(`Inputan Harus Lebih Besar Dari Nol`);
//   }
//   return k
// }

// luas(2,4)
