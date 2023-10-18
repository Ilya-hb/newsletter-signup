const successMessage = document.querySelector(".success-message");
const signUpForm = document.querySelector(".sign-up-form");
const successButton = document.querySelector(".success__button");
const signUpButton = document.querySelector(".form__submit");
const inputMail = document.querySelector("#email");
const errorLabel = document.querySelector("#error-label");
const successMessageMail = document.querySelector("#userEmail");

signUpButton.addEventListener("click", () => {
  const email = inputMail.value;

  if (validateEmail(email)) {
    signUpForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
    errorLabel.classList.add("hidden");
    inputMail.classList.remove("form__input_error");
    successMessageMail.innerHTML = email;
    console.log(successMessageMail);
  } else {
    inputMail.classList.add("form__input_error");
    errorLabel.classList.remove("hidden");
  }
});

successButton.addEventListener("click", () => {
  successMessage.classList.add("hidden");
  signUpForm.classList.remove("hidden");
});

function validateEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}
