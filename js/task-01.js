const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`)
for (let key of categories) {
    console.log(`Category: ${key.firstElementChild.textContent}`)
    console.log(`Element: ${key.lastElementChild.children.length}`)
}