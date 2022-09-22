let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterSpan = document.querySelector("#value");

const decrClick = () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
};
const incrClick = () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrClick);
incrementBtn.addEventListener("click", incrClick);
