const rangeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

const rangeControl = (evt) => {
  textSpan.style.fontSize = `${evt.currentTarget.value}px`;
};

rangeInput.addEventListener("input", rangeControl);
