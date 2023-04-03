import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formPopup = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._buttonPopup = this._popup.querySelector(".popup__button");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._formPopup.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
      this.renderLoading(true);
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
    this.renderLoading(false);
  }

  renderLoading(value) {
    if (value === true) {
      this._buttonPopup.textContent = "Сохранение...";
    } else {
      this._buttonPopup.textContent = "Сохранить";
    }
  }
}
