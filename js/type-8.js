const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  const outputArr = {};
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  outputArr.email = email.value;
  outputArr.password = password.value;

  console.log(outputArr);
  form.reset();
}
