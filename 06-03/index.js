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

        if (x <= 0 || y <=0 ) {
            reject('x atau y harus lebih dari 0')
        }

        setTimeout(() => {
            resolve(x + y);
        }, 3000);
    });
};

    

add(10, 6)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

console.log('2')

