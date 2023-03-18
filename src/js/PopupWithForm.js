import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleFormSubmit) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._formPopup = this._selectorPopup.querySelector(".popup__form");
    this._inputList = this._selectorPopup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners(selectorButton) {
    super.setEventListeners(selectorButton);
    this._formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}
