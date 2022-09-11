const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = sizeControl.value + 'px';

sizeControl.addEventListener('input', event => {
    text.style.fontSize = sizeControl.value + 'px';
})

// const rangeRef = document.querySelector('#font-size-control');
// const spanRef = document.querySelector('#text');
// let fontSize = String(Math.round(parseFloat(rangeRef.value))) + 'px';
// spanRef.style.fontSize = fontSize;

// rangeRef.addEventListener('input', even => {
//   fontSize = String(Math.round(parseFloat(even.currentTarget.value))) + 'px';
//   spanRef.style.fontSize = fontSize;
// });