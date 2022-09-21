const textInput = document.querySelector("#validation-input");
let numberSymbol = 0;

const setInput = (evt) => {
  numberSymbol = evt.currentTarget.value.length;
  console.log(numberSymbol);
};

const inputValidation = () => {
  console.log(Number(textInput.dataset.length));
  if (numberSymbol !== Number(textInput.dataset.length)) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
};

textInput.addEventListener("input", setInput);
textInput.addEventListener("blur", inputValidation);
