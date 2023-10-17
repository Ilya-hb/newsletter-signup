const selectors = {
  successMessage: document.querySelector(".success-message"),
  signUpForm: document.querySelector(".sign-up-form"),
  successButton: document.querySelector(".success__button"),
  signUpButton: document.querySelector(".form__submit"),
};

selectors.signUpButton.addEventListener("click", () => {
  //email validation

  selectors.signUpForm.classList.add("hidden");
  selectors.successMessage.classList.remove("hidden");
});

selectors.successButton.addEventListener("click", () => {
  selectors.successMessage.classList.add("hidden");
  selectors.signUpForm.classList.remove("hidden");
});
