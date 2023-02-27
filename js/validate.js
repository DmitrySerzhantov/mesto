import { FormValidator } from "./FormValidator.js";
const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input_type_error",
  buttonSelektor: ".popup__button",
  disabledClass: "popup__button_style_disabled",
};
const popupList = document.querySelectorAll(".popup");

popupList.forEach((popup) => {
  const formValidator = new FormValidator(formValidationConfig, popup);
  formValidator.enableValidation(formValidationConfig);
});
