function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes")
};

let divList = [];
let divSize = 30;

const createBoxes = (amount) => {
  amount = refs.input.value;
  console.log(amount);

  for (let i = 0; i < amount; i++) {
    const divRef = document.createElement('div');
    divRef.style.width = `${divSize + i*10}px`;
    divRef.style.height = `${divSize + i*10}px`;
    divRef.style.backgroundColor = getRandomHexColor();
    divList.push(divRef);
  };

  refs.boxes.append(...divList);
  divSize = divSize + amount*10;
};

refs.createBtn.addEventListener('click', createBoxes);

const destroyBoxes = () => {
divList.map((div) => div.remove());
divList = [];
divSize = 30;
};

refs.destroyBtn.addEventListener('click', destroyBoxes);