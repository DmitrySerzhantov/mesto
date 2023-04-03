import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popup.querySelector(".popup-img__image");
    this._nameImagePopup = this._popup.querySelector(".popup-img__name-img");
  }
  open(name, link) {
    super.open();
    this._imagePopup.src = link;
    this._imagePopup.alt = name;
    this._nameImagePopup.textContent = name;
  }
}
