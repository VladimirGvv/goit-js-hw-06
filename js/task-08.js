const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const mail = formElement.elements.email
    const password = formElement.elements.password
    if (mail.value === '' || password.value === '') {
        alert ('Все поля должны быть заполнены!');
    };
    formElement.reset();
})