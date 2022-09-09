function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', getTheTotalBoxes);
destroyBtn.addEventListener('click', removalBoxes);


console.dir(controls.children)
function getTheTotalBoxes() {
  let amount = 0;

  for (const key of controls.children) {
    if (key.tagName !== 'INPUT') continue;
    amount = Number(key.value);
    
  }

  totalBoxes(amount);
}

function totalBoxes(amount) {
  let sizeBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    sizeBox += 10;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
};

function removalBoxes() {
  boxes.innerHTML = '';
}
