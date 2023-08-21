// class formLogin{
//     constructor(selector = '', onSubmit = () => {}) {
//         const form = document.querySelector(selector);

//         form.addEventListener('submit', e => {
//             e.preventDefault();
//             const username = form.querySelector('input#username').value;
//             const password = form.querySelector('input#password').value;
//             onSubmit(username, password)
//         })
//     } 
// }

// new formLogin('form#form-login', (username, password) => {
//     console.log('tes', {username, password});
// });

class form{
    constructor(selectform, selectinput = [], onSubmit = () => {}) {
        const element = document.querySelector(selectform);

        element.addEventListener('submit', e => {
            e.preventDefault();
            const value = [];
            selectinput.forEach((sel) => {
                const input = document.querySelector(sel).value;
                value.push(input);
            })
            onSubmit(value);
        });
    }
}

class formLogin extends form {
    constructor(selectform, onSubmit = () => {}) {
        super(selectform, ['input#username', 'input#password'], ([username, password]) => {
            onSubmit(username, password);
        });
    }
}

new formLogin('form#form-login', (username, password) => {
    console.log('tes', {username, password});
});