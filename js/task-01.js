const categoriesEl = document.querySelector('ul#categories');
const liEl = categoriesEl.querySelectorAll(".item");

console.log("Number of categories:", liEl.length);

const result = liEl.forEach(element => {
    console.log(" ");
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.querySelectorAll("li").length);
})