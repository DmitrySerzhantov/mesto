const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input_type_error",
  buttonSelektor: ".popup__button",
  buttonDisabledClass: "popup__button_style_disabled",
};
const formCardSelector = document.querySelector(".submit-card");
function enableValidation(config) {
  const formlist = document.querySelectorAll(config.formSelector);
  toggleButton(formCardSelector, config);
  formlist.forEach((form) => {
    enableFormValidation(form, config);
  });
}

function enableFormValidation(form, config) {
  form.addEventListener("input", () => {
    toggleButton(form, config);
  });

  addInputLusteners(form, config);
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
  buttunSubmit.classList.toggle("popup__button_style_disabled", !isFormValid);
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
