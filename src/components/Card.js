export class Card {
  constructor(cardData, templateElementCard, handleCardClick, api) {
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._templateElementCard = templateElementCard;
    this._handleCardClick = handleCardClick;
    this._valueCountLike = cardData.likes.length;
    this._idUser = cardData.owner._id;
    this._api = api;
    this._idCard = cardData._id;
    this._likes = cardData.likes;
    this._arrayidUsers = this._likes.map((item) => item._id);
    this._myId = "80b28e59a668068be4b0a6fa";
  }

  renderCard() {
    this._copyElementCard =
      this._templateElementCard.cloneNode(true).children[0]; //Клонирую html элемент li
    this._imgElementCard = this._copyElementCard.querySelector(".cards__img");
    this._buttonLike = this._copyElementCard.querySelector(".cards__like");
    this.buttonDelete = this._copyElementCard.querySelector(".cards__trash");
    this._likeCount = this._copyElementCard.querySelector(
      ".cards__like-counter"
    );
    this._imgElementCard.src = this._cardLink; //присваивает значение элемента link для src.
    this._copyElementCard.querySelector(".cards__text").textContent =
      this._cardName;
    this._imgElementCard.alt = this._cardName;
    this._setLikesCount(this._valueCountLike);
    this._setEventListeners();

    this._hidenButtonDelete();
    return this._copyElementCard;
  }

  _removeItem = (id) => {
    this._api.deleteCard(id).then(() => {
      this._copyElementCard.remove();
    });
    document.querySelector(".popup-delete-card").classList.remove("popup_open");
  };

  _isCardLiked() {
    if (this._handleCardLike()) {
      this._api.likeCard(this._idCard).then((res) => {
        this._setLikesCount(res.likes.length);
        this._buttonLike.classList.add("cards__like_color_black");
      });
    } else {
      this._api.deleteLikeCard(this._idCard).then((res) => {
        this._setLikesCount(res.likes.length);
        this._buttonLike.classList.remove("cards__like_color_black");
      });
    }
  }
  _handleCardLike() {
    return !this._arrayidUsers.includes(this._myId);
  }

  _setLikesCount(velueLikes) {
    this._likeCount.textContent = velueLikes;
    if (!this._handleCardLike()) {
      this._buttonLike.classList.add("cards__like_color_black");
    }
  }

  _increasesImg() {
    this._handleCardClick({
      name: this._imgElementCard.alt,
      link: this._imgElementCard.src,
    });
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._isCardLiked();
    });
    this._imgElementCard.addEventListener("click", () => this._increasesImg());
    this.buttonDelete.addEventListener("click", () => {
      this._buttonPopupYes = document.querySelector(".button-delete-card");
      this._buttonPopupYes.addEventListener("click", () => {
        this._removeItem(this._idCard);
      });
      document.querySelector(".popup-delete-card").classList.add("popup_open");
    });
  }

  _hidenButtonDelete() {
    if (this._idUser !== this._myId) {
      this.buttonDelete.classList.add("cards__trash_visibility_hiden");
    }
  }
}
