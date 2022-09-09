const inputValidName = document.querySelector('#validation-input');
const validTotalLength = Number(inputValidName.dataset.length);

inputValidName.addEventListener('blur', (event) => {
    const nameInputValue = event.currentTarget.value.length;
    const classList = event.currentTarget.classList;
    const inputValid = classList.contains('valid');
    const inputInvalid = classList.contains('invalid');

    if (nameInputValue === validTotalLength) {
        if (inputInvalid) classList.remove('invalid');
        if (!inputValid) classList.add('valid')
    }
    else {
        if (inputValid) classList.remove('valid')
        if (!inputInvalid) classList.add('invalid');
    }
}
)
