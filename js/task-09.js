function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");

const onClick = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = getRandomHexColor();
};

buttonRef.addEventListener('click', onClick);