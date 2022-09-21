const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const setInput = (evt) => {
  evt.currentTarget.value === ""
    ? (textOutput.textContent = "Anonymous")
    : (textOutput.textContent = evt.currentTarget.value);
};

textInput.addEventListener("input", setInput);
