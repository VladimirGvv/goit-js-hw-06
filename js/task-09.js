function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.body;
const spanColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', event => {
  let color = '';
  color = getRandomHexColor();
  spanColor.textContent = color;
  bodyColor.style.backgroundColor = color;
})
