const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`)
for (let key of categories) {
    const categoriesKey = [...key.children]
    
    console.log(`Category: ${categoriesKey[0].textContent}`)
    console.log(`Element: ${categoriesKey[1].children.length}`)
}