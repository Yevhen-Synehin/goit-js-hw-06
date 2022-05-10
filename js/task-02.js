const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const list = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  return element;
})

ulEl.append(...list);