import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(name, link, selectorPopup) {
    super();
    this._name = name;
    this._link = link;
    this._selectorPopup = selectorPopup;
  }
  open() {
    super.open();
    this._selectorPopup.classList.add("popup_open");
    document.querySelector(".popup-img__image").src = this._link;
    document.querySelector(".popup-img__image").alt = this._name;
    document.querySelector(".popup-img__name-img").textContent = this._name;
  }
}
