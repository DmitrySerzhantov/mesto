export class FormValidator {
  constructor(config, elementForm) {
    (this._config = config), (this._elementForm = elementForm);
  }

  enableValidation(config) {
    const formlist = document.querySelectorAll(this._config.formSelector);
    formlist.forEach((form) => {
      this._enableFormValidation(form, config);
      this._toggleButton(form, config);
    });
  }

  _enableFormValidation(form, config) {
    form.addEventListener("submit", this._disableSubmit);
    form.addEventListener("input", () => {
      this._toggleButton(form, config);
    });
    form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButton(form, config);
      }, 0);
    });
    this._addInputLusteners(form, config);
    this._toggleButton(form, config);
  }

  _toggleButton(form, config) {
    const buttunSubmit = form.querySelector(config.buttonSelektor);
    const isFormValid = form.checkValidity();
    buttunSubmit.disabled = !isFormValid;
    buttunSubmit.classList.toggle(config.disabledClass, !isFormValid);
  }
  _disableSubmit(event) {
    event.preventDefault();
  }
  _addInputLusteners(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);

    inputList.forEach((item) => {
      item.addEventListener("input", (event) => {
        this._handleFormInput(event, config);
      });
    });
  }

  _handleFormInput(event, config) {
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
}
