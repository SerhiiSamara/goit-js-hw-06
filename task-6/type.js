const textInput = document.querySelector("#validation-input");
let numberSymbol = 0;

const setInput = (evt) => {
  numberSymbol = evt.currentTarget.value.length;
  console.log(numberSymbol);
};

const inputValidation = () => {
  if (numberSymbol !== 6) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.add("valid");
  }
};

textInput.addEventListener("input", setInput);
textInput.addEventListener("blur", inputValidation);
