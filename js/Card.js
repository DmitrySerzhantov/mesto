export class Card {
  constructor(item, template, handlePopupImg) {
    (this._itemName = item.name),
      (this._itemLink = item.link),
      (this._template = template),
      (this._handlePopupImg = handlePopupImg);
  }

  createCard() {
    this._copyElementTemplate = this._template.cloneNode(true).children[0]; //Клонирую html элемент li
    this._copyElementTemplate.querySelector(".cards__img").src = this._itemLink; //присваивает значение элемента link для src.
    this._copyElementTemplate.querySelector(".cards__text").textContent =
      this._itemName;
    this._copyElementTemplate.querySelector(".cards__img").alt = this._itemName;

    document.querySelector(".cards").prepend(this._copyElementTemplate);
    this._addEventListeners();
  }

  _removeItem = () => {
    this._copyElementTemplate.remove();
    this._removeEventListeners();
  };

  _removeEventListeners = () => {
    this._copyElementTemplate
      .querySelector(".cards__trash")
      .removeEventListener("click", this._removeItem);
  };
  _addEventListeners = () => {
    const cardsLike = this._copyElementTemplate.querySelector(".cards__like");
    this._copyElementTemplate
      .querySelector(".cards__like")
      .addEventListener("click", () => {
        cardsLike.classList.toggle("cards__like_color_black");
      });

    this._copyElementTemplate
      .querySelector(".cards__trash")
      .addEventListener("click", this._removeItem);

    this._copyElementTemplate
      .querySelector(".cards__img")
      .addEventListener("click", () => {
        this._handlePopupImg(this._fillInImageData());
      });
  };

  _fillInImageData = () => {
    this._popupWithEnlargedImage = document.querySelector(".popup-img");
    this._popupWithEnlargedImage.querySelector(".popup-img__image").src =
      this._itemLink;
    this._popupWithEnlargedImage.querySelector(
      ".popup-img__name-img"
    ).textContent = this._itemName;
    this._popupWithEnlargedImage.querySelector(".popup-img__image").alt =
      this._itemName;
  };
}
