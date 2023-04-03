export class Card {
  constructor(
    cardData,
    templateElementCard,
    idUser,
    handleCardClick,
    hendleButtonDelete,
    handelelickCard,
    handeledislikeCard
  ) {
    this._cardName = cardData.name;
    this._cardLink = cardData.link;
    this._templateElementCard = templateElementCard;
    this._handleCardClick = handleCardClick;
    this._valueCountLike = cardData.likes.length;
    this._idUser = cardData.owner._id;
    this._idCard = cardData._id;
    this._likes = cardData.likes;
    this._cardData = cardData;
    this._hendleButtonDelete = hendleButtonDelete;
    this._myIdUser = idUser;
    this._handelelickCard = handelelickCard;
    this._handeledislikeCard = handeledislikeCard;
    this._arrayLikeCards = cardData.likes;
  }

  renderCard() {
    this._copyElementCard =
      this._templateElementCard.cloneNode(true).children[0]; //Клонирую html элемент li
    this._imgElementCard = this._copyElementCard.querySelector(".cards__img");
    this._buttonLike = this._copyElementCard.querySelector(".cards__like");
    this._buttonDelete = this._copyElementCard.querySelector(".cards__trash");
    this._likeCount = this._copyElementCard.querySelector(
      ".cards__like-counter"
    );
    this._imgElementCard.src = this._cardLink; //присваивает значение элемента link для src.
    this._copyElementCard.querySelector(".cards__text").textContent =
      this._cardName;
    this._imgElementCard.alt = this._cardName;
    this._setEventListeners();

    this.handleCardLike(this._arrayLikeCards, this._valueCountLike);
    this._hidenButtonDelete();
    return this._copyElementCard;
  }

  _removeItem = (id) => {
    this._hendleButtonDelete(id, this._copyElementCard);
  };

  _isCardLiked() {
    if (!this.value) {
      this._handelelickCard(this._idCard);
    } else {
      this._handeledislikeCard(this._idCard);
    }
  }

  handleCardLike(arraylekes, countLike) {
    this._arrayidUsers = arraylekes.map((item) => item._id);
    this.value = this._arrayidUsers.includes(this._myIdUser);
    this.setLikesCount(countLike);
  }

  setLikesCount(velueLikes) {
    this._likeCount.textContent = velueLikes;
    if (this.value) {
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
    this._buttonDelete.addEventListener("click", () => {
      this._removeItem(this._idCard);
    });
  }

  _hidenButtonDelete() {
    if (this._idUser !== this._myIdUser) {
      this._buttonDelete.classList.add("cards__trash_visibility_hiden");
    }
  }
}
