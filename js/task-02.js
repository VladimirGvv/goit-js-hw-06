const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const listTotal = ingredients.forEach(ingredient => {
  
  let item = document.createElement("li");
  
  item.textContent = ingredient;
  item.classList.add("item")
  list.append(item); 
});
