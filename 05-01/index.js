function luaspersegi() {
    var nilaix = document.getElementById("nilaix")
    let luas = 0;

    function total(){
        const nilai = nilaix.value;
        if(nilai > 0){
            luas = nilai * nilai
            return luas
        }
    }
    return total
}

const persegi = luaspersegi()
const luas = document.getElementById("hasilkali");
const btn = document.getElementById("hitungperkalian");

btn.addEventListener("click", function() {
    const count = persegi();
    luas.textContent = count;
})
