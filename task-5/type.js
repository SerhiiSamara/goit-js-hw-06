const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const setInput = (evt) => {
  textOutput.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value.length === 0) {
    textOutput.textContent = "Anonymous";
    return;
  }
};

textInput.addEventListener("input", setInput);
