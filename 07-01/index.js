class formLogin {
    constructor(selectForm, selectInput = [], onSubmit = () => {}){
        const element = document.querySelector(selectForm);

        element.addEventListener('submit', e => {
            e.preventDefault();
            const value = [];
            selectInput.forEach((sel)=> {
                const input = document.querySelector(sel).value;
                value.push(input);
            });
            onSubmit(value);
        });
    }
}

class login extends formLogin {
    constructor(selector, onSubmit = () => {}){
        super(selector, ['input#email', 'input#password'], ([email, password]) => {
            onSubmit(email, password);
        })
    }
}

new formLogin('form-login', (email, password) => {
    console.log(`Email:`, {email, password}); // <EMAIL>
})