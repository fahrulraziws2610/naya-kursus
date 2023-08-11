const kota = ['Surabaya', 'Makassar', 'Jakarta'];  



kota.sort(function (a, b) {  
  const A = a.split('t').length;  
  const B = b.split('t').length;  
  return B - A;  
});  
  
console.table(kota);