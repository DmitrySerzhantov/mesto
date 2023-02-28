export class Card {
  constructor(cardData, templateElementCard, handleImageClick) {
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._templateElementCard = templateElementCard;
    this._handleImageClick = handleImageClick;

  }


  renderCard() {
    this._copyElementCard = this._templateElementCard.cloneNode(true).children[0]; //Клонирую html элемент li
    this._imgElrmentCard = this._copyElementCard.querySelector(".cards__img");
    this._imgElrmentCard.src = this._cardLink; //присваивает значение элемента link для src.
    this._copyElementCard.querySelector(".cards__text").textContent =  this._cardName;
    this._imgElrmentCard.alt = this._cardName;
    this._cardLike();
    this._deleteCard();
    this._zoomImg();
    return this._copyElementCard;
  }


  _removeItem = () => {
    this._copyElementCard.remove();

  };

    _cardLike () {
    const cardsLike = this._copyElementCard.querySelector(".cards__like");
    cardsLike.addEventListener("click", () => {cardsLike.classList.toggle("cards__like_color_black"); });
    };
   _deleteCard () {
    this._copyElementCard.querySelector(".cards__trash").addEventListener("click", this._removeItem);
    };

    _zoomImg () {
    this._imgElrmentCard.addEventListener("click", () => {this._handleImageClick(this._imgElrmentCard)});
    }

  }
