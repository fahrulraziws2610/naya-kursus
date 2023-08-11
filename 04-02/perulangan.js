// function perkalian() {
//   let x = document.getElementById("nilaix").value;
//   let y = document.getElementById("nilaiy").value;

//   for ( x = y; x <= y; x++) {
//     const hasil = x + x;
//     document.getElementById("hasilkali").innerHTML = hasil;
//   }
// };

// document.getElementById("hitungperkalian").addEventListener("click", perkalian);

// let a = 6;
// let b = 1;

// let sum = 0;

// for (let i = 0; i < b; i++) {
//   for (let j = 0; j < a; j++) {
//     sum++;
//   }
// }

// console.log(`hasil perkalian ${a} x ${b}: ` + sum);

// let result = 0;
// for (let i = 1; i <= n; i++) {
//     result += Math.pow(i, exponent);
// }
// return result;
// console.log(sum);

// for (let i = 0; i < b; i++) {
//   for (let j = 0; j < b; j++) {
//     for (let k = 0; k < b; k++) {
//       for (let l = 0; l < pangkat; l++) {
//         hasil++;
//       }
//     }
//   }
// }

// console.log(hasil);

function powerSum(base, exponent, n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let term = 1;
    for (let j = 0; j < exponent; j++) {
      term *= i;
    }
    result += term;
  }
  return result;
}

const base = 2;
const exponent = 3;
const n = 5;

const result = powerSum(base, exponent, n);
console.log(
  `The sum of ${base} raised to the power of ${exponent} for the first ${n} natural numbers is: ${result}`
);
