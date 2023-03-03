export class FormValidator {
  constructor(params, elementForm) {
    this._formSelector = params.formSelector;
    this._inputSelector = params.inputSelector;
    this._errorClass = params.errorClass;
    this._buttonSelektor = params.buttonSelektor;
    this._disabledClass = params.disabledClass;
    this._elementForm = elementForm;
    this._elementButton = this._elementForm.querySelector(this._buttonSelektor);
  }

  enableValidation() {
    this._enableFormValidation();
    this._enableToggleButton();
  }

  _enableFormValidation() {
    this._elementForm.addEventListener("input", () => {
      this._enableToggleButton();
    });

    this._elementForm.addEventListener("reset", () => {
      setTimeout(() => {
        this._enableToggleButton();
      }, 0);
    });
    this._addInputListeners();
  }

  _enableToggleButton() {
    this._isFormValid = this._elementForm.checkValidity();
    this._elementButton.disabled = !this._isFormValid;
    this._elementButton.classList.toggle(
      this._disabledClass,
      !this._isFormValid
    );
  }

  _addInputListeners() {
    this._elementForm.addEventListener("input", (inputElement) => {
      this._handleFormInput(inputElement);
    });
  }

  _showInputError(input, errorElement) {
    input.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError(input, errorElement) {
    input.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _handleFormInput(inputElement) {
    const input = inputElement.target;
    const inputId = input.id;
    const errorElement = this._elementForm.querySelector(`#${inputId}-error`);

    if (input.validity.valid) {
      this._hideInputError(input, errorElement);
    } else {
      this._showInputError(input, errorElement);
    }
  }
}
