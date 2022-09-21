const body = document.body;
const span = document.querySelector(".color");
const button = document.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}
