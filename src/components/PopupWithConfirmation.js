import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, hendlePopupDelete) {
    super(popupSelector);
    this._formPopup = this._popup.querySelector(".popup__form");
    this._hendlePopupDelete = hendlePopupDelete;
    this._buttonPopup = this._popup.querySelector(".popup__button");
  }

  setEventListeners(id, element) {
    super.setEventListeners();
    this._formPopup.addEventListener("submit", () => {
      this._hendlePopupDelete(id, element);
    });
  }
}
