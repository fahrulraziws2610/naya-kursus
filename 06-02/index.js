class formpersegipanjang{
    constructor(selector = '', onSubmit = () => {}) {
        const form = document.querySelector(selector);

        form.addEventListener('submit', e => {
            e.preventDefault();
            const panjang = form.querySelector('input#nilaix');
            const lebar = form.querySelector('input#nilaiy');
            let luas = 0

            const nilaix = panjang.value;
            const nilaiy = lebar.value;

            try {
                if(nilaix > 0 && nilaiy > 0){
                luas = nilaix * nilaiy
                onSubmit(panjang, lebar, luas)
                return luas;
            } else {
                throw new Error('kosong nih nilainya')
            }
            } catch(error){
                console.log(error)
                alert("Inputan harus berupa angka")
            }
        });
    } 
}

new formpersegipanjang('form#form-persegipanjang', (panjang, lebar, luas) => {
    console.log('tes', {panjang, lebar, luas});
    console.log('tes', {});
});