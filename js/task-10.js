const boxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#controls");
let amount;
let size = 0;

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  amount = divEl.firstElementChild.value;
  size = 30;
  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    boxes.insertAdjacentHTML("beforeend", `<div class="element${i}" ></div>`);
    const elementDiv = document.querySelector(`.element${i}`);
    elementDiv.style.backgroundColor = color;
    elementDiv.style.width = `${size}px`;
    elementDiv.style.height = `${size}px`;
    size += 10;
  }
}

function destroyBoxes() {
  if (size === 0) {
    alert("Creat squares");
    return;
  }

  boxes.innerHTML = "";
}
