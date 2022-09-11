const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const mail = formElement.email;
    const password = formElement.password;
    
    if (mail.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!');
    };

    const formData = {
        email: formElement.email.value,
        password: formElement.password.value,
    };
    console.log(formData);

    form.reset();
});