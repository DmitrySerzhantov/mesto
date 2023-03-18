export class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
  }

  open() {
    this._selectorPopup.classList.add("popup_open");
    this._handleEscClose();
  }

  close() {
    this._selectorPopup.classList.remove("popup_open");
    document.removeEventListener("keydown", () => {
      this._handleEscClose();
    });
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners(selectorButton) {
    selectorButton.addEventListener("click", () => {
      this.close();
    });
    this._selectorPopup.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }
}
