import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import {
  formValidationConfig,
  profileEditButton,
  profileTitle,
  profileSubtitle,
  buttonOpeningPopupEditingCards,
  cardTemplate,
  popupFormAllInHTML,
  cardsContainer,
  profileAvatar,
  buttonEditAvatar,
} from "../utils/constants.js";
import { Popup } from "../components/Popup";
import { Api } from "../components/Api";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation";

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-62/",
  headers: {
    "content-type": "application/json",
    authorization: "fa3f79ad-41aa-4ce4-b408-a913152be61d",
  },
});
const profileInfo = document.querySelector(".profile__info");

function handleLikeCard(idCard) {
  api
    .likeCard(idCard)
    .then((res) => {
      this.setLikesCount(res.likes.length);
      this._buttonLike.classList.add("cards__like_color_black");

      this.handleCardLike(res.likes, res.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleDislikeCard(idCard) {
  api
    .deleteLikeCard(idCard)
    .then((res) => {
      this.setLikesCount(res.likes.length);
      this._buttonLike.classList.remove("cards__like_color_black");

      this.handleCardLike(res.likes, res.likes.length);
    })
    .catch((err) => {
      console.log(err);
    });
}

buttonEditAvatar.addEventListener("click", () => {
  popupEditAvatar.open();
});

const handleAvatarFormSubmit = (dataItem) => {
  api
    .updateAvatar({ avatar: dataItem.linkImg })
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    });
};
const popupEditAvatar = new PopupWithForm(
  ".popup-avatar-update",
  handleAvatarFormSubmit
);
popupEditAvatar.setEventListeners();

const enableFormValidation = (validatedForm) => {
  const formValidator = new FormValidator(formValidationConfig, validatedForm);
  formValidator.enableValidation();
  validatedForm.addEventListener("submit", function disableSubmit(event) {
    event.preventDefault();
  });
};

popupFormAllInHTML.forEach(enableFormValidation);

const popupWithImage = new PopupWithImage(".popup-img");
popupWithImage.setEventListeners();
const handleCardClick = ({ name, link }) => {
  popupWithImage.open(name, link);
};
let sectionCard;
// Создание карточки при добавлении из формы.
const handleCardFormSubmit = (element) => {
  api
    .setInitialNewCard({
      link: element.linkImg,
      name: element.nameCards,
    })
    .then((result) => {
      renderer(result);
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const hendlePopupDelete = (id, element) => {
  api
    .deleteCard(id)
    .then(() => {
      element.remove();
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const popupDeleteCard = new PopupWithConfirmation(
  ".popup-delete-card",
  hendlePopupDelete
);

popupDeleteCard.setEventListeners();
const handleButtonDelete = (id, element) => {
  popupDeleteCard.open();
  popupDeleteCard.setDataItem(id, element);
};

const createCard = (cardData) => {
  const cardInstance = new Card(
    cardData,
    cardTemplate,
    profileInfo.id,
    handleCardClick,
    handleButtonDelete,
    handleLikeCard,
    handleDislikeCard
  );
  return cardInstance.renderCard();
};

const renderer = (itemData) => {
  sectionCard.addItem(createCard(itemData));
};

function setUserInfoInitial(data) {
  userInfo.setUserInfo({ name: data.name, about: data.about });
  userInfo.setUserAvatar(data.avatar);
  profileInfo.id = data._id;
}

function renderInitialCards(data) {
  sectionCard = new Section(
    { items: data, renderer: renderer },
    cardsContainer
  );
  sectionCard.rendererAllElements();
}

Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then((res) => {
    setUserInfoInitial(res[0]);
    renderInitialCards(res[1]);
  })
  .catch((err) => {
    console.log(err);
  });

///////////////////////////////////////////////////////////////////////////

const userInfo = new UserInfo({
  name: profileTitle,
  info: profileSubtitle,
  avatar: profileAvatar,
});
const handleProfileFormSubmit = (profileData) => {
  const updatedUserProfile = api.setUserProfile({
    name: profileData.name,
    about: profileData.info,
  });

  updatedUserProfile
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about });
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const popupProfile = new PopupWithForm(
  ".popup-edit-add",
  handleProfileFormSubmit
);
popupProfile.setEventListeners();

const openEditProfilePopup = () => {
  popupProfile.open();
};

profileEditButton.addEventListener("click", () => {
  openEditProfilePopup();
  popupProfile.setInputValues(userInfo.getUserInfo());
});
//////////////////////////////////////////////////////////////////////
const popupAddCard = new PopupWithForm(
  ".popup-cards-add",
  handleCardFormSubmit
);
popupAddCard.setEventListeners();
const handlePopupAddCard = () => {
  popupAddCard.open();
};

buttonOpeningPopupEditingCards.addEventListener("click", () => {
  handlePopupAddCard();
});
