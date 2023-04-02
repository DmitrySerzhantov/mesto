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

const userProfile = api.getUserProfile();
userProfile.then((result) => {
  profileTitle.textContent = result.name;
  profileSubtitle.textContent = result.about;
  profileAvatar.src = result.avatar;
});
buttonEditAvatar.addEventListener("click", () => {
  popupEditAvatar.open();
});
const handleAvatarFormSubmit = (dataItem) => {
  api.updatesAvatar({ avatar: dataItem.linkImg }).then((res) => {
    profileAvatar.src = res.avatar;
  });

  userProfile.then((result) => {
    profileAvatar.src = result.avatar;
  });
};
const popupEditAvatar = new PopupWithForm(
  ".popup-avatar-update",
  handleAvatarFormSubmit
);
popupEditAvatar.setEventListeners();

const userInfo = new UserInfo({
  name: profileTitle,
  info: profileSubtitle,
});
const handeleUserInfo = (profileData) => {
  const updatedUserProfile = api.setUserProfile({
    name: profileData.name,
    about: profileData.info,
  });

  updatedUserProfile.then((res) => {
    userInfo.setUserInfo(res.name, res.about);
  });
};

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

// Создание карточки при добавлении из формы.
const handleCardFormSubmit = (element) => {
  const newCard = api.setInitialNewCard({
    link: element.linkImg,
    name: element.nameCards,
  });
  newCard.then((res) => {
    sectionCard.addItem(createCard(res));
  });
};

const createCard = (cardData) => {
  const cardInstance = new Card(cardData, cardTemplate, handleCardClick, api);

  return cardInstance.renderCard();
};

const renderer = ({ itemData }) => {
  sectionCard.addItem(createCard(itemData));
};

const sectionCard = new Section({ renderer: renderer }, cardsContainer, api);

sectionCard.rendererAllElements();

///////////////////////////////////////////////////////////////////////////
const handleProfileFormSubmit = (element) => {
  const profileData = {
    info: element.info,
    name: element.name,
  };
  handeleUserInfo(profileData);
};

const popupProfile = new PopupWithForm(
  ".popup-edit-add",
  handleProfileFormSubmit
);
popupProfile.setEventListeners();
const handlePopupProfail = () => {
  popupProfile.open();
};

profileEditButton.addEventListener("click", () => {
  handlePopupProfail();
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
