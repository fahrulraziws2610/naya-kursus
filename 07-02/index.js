// class formBarang{
//     tagTable = '<table><thead><tr>'

//     constructor(selector = '', onSubmit = () => {}) {
//         const form = document.querySelector(selector);
        
//         form.addEventListener('submit', e => {
//             e.preventDefault();
//             console.log(e)
//             //let tabelHTML = ''

            

//             for (let i = 1; i <= namabarang; i++) {
//              this.tagTable += '<th>Kolom ' + i + '</th>';
//             }
//             let tabelHTML = JSON.stringify(this.tagTable);
//             onSubmit(namabarang, jumlahbarang, price, tabelHTML)
//         });
//     } 
// }

            

// new formBarang('form#form-barang', (namabarang, jumlahbarang, price, strTable) => {
//     console.log('tes', {namabarang, jumlahbarang, price, strTable});
//     //let strTable = {tabelHTML}


//     document.getElementById("tabelContainer", {namabarang, jumlahbarang, price, strTable}).innerHTML = strTable;
// });

// class TableManager {
//     constructor(tableId) {
//       this.table = document.getElementById(tableId);
//     }
  
//     addRow(data) {
//       const newRow = this.table.insertRow();
//       for (const value of data) {
//         const cell = newRow.insertCell();
//         cell.textContent = value;
//       }
//     }
//   }
    
//   const tableManager = new TableManager("dataTable");
//   const addButton = document.getElementById("addButton");
  
//   addButton.addEventListener("click", (event) => {
//     event.preventDefault(); // Mencegah perilaku bawaan formulir
  
//     const namaBarang = document.getElementById("namaBarang").value;
//     const jumlahBarang = document.getElementById("jumlahBarang").value;
//     const harga = document.getElementById("harga").value;
  
//     if (namaBarang.trim() !== "" && jumlahBarang.trim() !== "" && harga.trim() !== "") {
//       const data = [namaBarang, jumlahBarang, harga];
//       tableManager.addRow(data);
  
//       document.getElementById("namaBarang").value = "";
//       document.getElementById("jumlahBarang").value = "";
//       document.getElementById("harga").value = "";
//     }
//   });





const btn = document.querySelector('#addButton')

btn.addEventListener('click', function() {

    const namabarang = document.querySelector('#namaBarang').value;
    const jumlahbarang = document.querySelector('#jumlahBarang').value;
    const price = document.querySelector('#harga').value;
    console.log(namabarang, jumlahbarang, price)

    if (namabarang == "" && jumlahbarang == "" && price == "") {
        const table = document.querySelector('#dataTable');
    const row = document.createElement('tr');

    const c1 = document.createElement('td');
    const c2 = document.createElement('td');
    const c3 = document.createElement('td');

    c1.innerHTML = namabarang;
    c2.innerHTML = jumlahbarang;
    c3.innerHTML = price;

    
    row.appendChild(c1)
    row.appendChild(c2)
    row.appendChild(c3)
    table.appendChild(row);
    
    }
});