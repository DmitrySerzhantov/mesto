export class Card {
  constructor(cardData, templateElementCard, handleCardClick) {
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._templateElementCard = templateElementCard;
    this._handleCardClick = handleCardClick;
  }

  renderCard() {
    this._copyElementCard =
      this._templateElementCard.cloneNode(true).children[0]; //Клонирую html элемент li
    this._imgElementCard = this._copyElementCard.querySelector(".cards__img");
    this._buttonLike = this._copyElementCard.querySelector(".cards__like");
    this._imgElementCard.src = this._cardLink; //присваивает значение элемента link для src.
    this._copyElementCard.querySelector(".cards__text").textContent =
      this._cardName;
    this._imgElementCard.alt = this._cardName;
    this._setEventListeners();

    return this._copyElementCard;
  }

  _removeItem = () => {
    this._copyElementCard.remove();
  };

  _handleLikeCard() {
    this._buttonLike.classList.toggle("cards__like_color_black");
  }

  _increasesImg() {
    this._handleCardClick({
      name: this._imgElementCard.alt,
      link: this._imgElementCard.src,
    });
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => this._handleLikeCard());
    this._copyElementCard
      .querySelector(".cards__trash")
      .addEventListener("click", this._removeItem);
    this._imgElementCard.addEventListener("click", () => this._increasesImg());
  }
}
