/*


* non-blok
* Promise:
    - resolve => then
    - reject => catch

* Promise:
    - async => bisa di await
    - async => bisa di then -> catch


*/




// setTimeout(() => {
//     console.log('1')
// }, 3000);

// console.log('2')

// const add = (cb) => {
//     setTimeout(() => {
//         return cb('10');
//     }, 3000);
// };

// add((res) => {
//     console.log(res);
// });

// console.log('2');

const add = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x <= 0 || y <= 0) {
                reject('x dan y harus melebihi 0')
            }
            resolve(x * y);
        }, 3000);
    });
};

// const main = async () => {

//     try {
//         const res = await add(0, 1);
//         console.log(res)
//     } catch(error) {
//         console.log('wadaw', error)
//     }
// };

const main = async () => {
    const res = await add(0, 1);
    console.log(res)
};

main()
// .then(() => {
//     console.log('askdla')
// })

.catch(error => {
    console.log('ecdmcdm', error);
});