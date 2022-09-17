const rangeInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

const rangeToFontSize = (evt) => {
  textOutput.style.fontSize = `${evt.currentTarget.value}px`;
};

rangeInput.addEventListener("input", rangeToFontSize);
