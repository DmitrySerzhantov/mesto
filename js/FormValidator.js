export class FormValidator {
  constructor(params, elementForm) {
    this._formSelector = params.formSelector;
    this._inputSelector = params.inputSelector;
    this._errorClass = params.errorClass;
    this._buttonSelektor = params.buttonSelektor;
    this._disabledClass = params.disabledClass;
    this._elementForm = elementForm;
    this._formPopupElement = this._elementForm.querySelector(this._formSelector);
  }

  enableValidation() {
      this._enableFormValidation(this._elementForm);

  }

  _enableFormValidation(inputElement) {
   inputElement.addEventListener("input", () => { this._toggleButton(inputElement)  });

    inputElement.addEventListener("reset", () => {
      setTimeout(() => {this._toggleButton(inputElement); }, 0);
    });
    this._addInputListeners(inputElement);
  }

  _toggleButton(inputElement) {
  this._isFormValid = this._formPopupElement.checkValidity();
  inputElement.querySelector(this._buttonSelektor).disabled = !this._isFormValid;
  inputElement.querySelector(this._buttonSelektor).classList.toggle(this._disabledClass, !this._isFormValid);
  }

   _addInputListeners(inputElement) {
      inputElement.addEventListener("input", (inputElement) => {
        this._handleFormInput(inputElement);
    });
  }

  _showInputError (input, errorElement) {
    input.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError (input, errorElement) {
    input.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

_handleFormInput(inputElement) {
  const input = inputElement.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);

  if (input.validity.valid) {
    this._hideInputError (input, errorElement)
  } else {
   this._showInputError(input, errorElement)
  }
}
}
