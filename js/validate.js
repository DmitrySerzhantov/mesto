const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input_type_error",
  buttonSelektor: ".popup__button",
  disabledClass: "popup__button_style_disabled",
};

function disableSubmit(event) {
  event.preventDefault();
}

function enableValidation(config) {
  const formlist = document.querySelectorAll(config.formSelector);

  formlist.forEach((form) => {
    enableFormValidation(form, config);
    toggleButton(form, config);
    formsValidity(form, config);
  });
}

function enableFormValidation(form, config) {
  form.addEventListener("submit", disableSubmit);
  form.addEventListener("input", () => {
    toggleButton(form, config);
  });

  addInputLusteners(form, config);
  toggleButton(form, config);
}

function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = "";
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

function toggleButton(form, config) {
  const buttunSubmit = form.querySelector(config.buttonSelektor);
  const isFormValid = form.checkValidity();
  buttunSubmit.disabled = !isFormValid;
  buttunSubmit.classList.toggle(config.disabledClass, !isFormValid);
}

function addInputLusteners(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);

  inputList.forEach((item) => {
    item.addEventListener("input", (event) => {
      handleFormInput(event, config);
    });
  });
}

enableValidation(formValidationConfig);
