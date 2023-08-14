class formLogin{
    constructor(selector = '', onSubmit = () => {}) {
        const form = document.querySelector(selector);

        form.addEventListener('submit', e => {
            e.preventDefault();
            const username = form.querySelector('input#username').value;
            const password = form.querySelector('input#password').value;
            onSubmit(username, password)
        })
    }
}

new formLogin('form#form-login', (username, password) => {
    console.log('tes', {username, password});
});