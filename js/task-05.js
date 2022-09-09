const nameLabel = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameLabel.addEventListener('input', (event) => {
   let nameInput = event.currentTarget.value
    nameOutput.textContent = nameInput === '' ? 'Anonymous' : nameInput
}
)
