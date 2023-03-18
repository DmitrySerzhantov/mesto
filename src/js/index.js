import "../pages/index.css";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section";
import { PopupWithImage } from "./PopupWithImage";
import { PopupWithForm } from "./PopupWithForm";
import { UserInfo } from "./UserInfo";
import {
  formValidationConfig,
  initialCards,
  fieldEnteringTypeActivityPopup,
  popupProfileEditing,
  profileEditButton,
  buttonCloseProfilePopup,
  profileTitle,
  profileSubtitle,
  profileNameInputFieldPopup,
  buttonOpeningPopupEditingCards,
  popupAddingCards,
  buttonClosePopupCards,
  popupWithEnlargedImage,
  popupImgCloseBtn,
  cardTemplate,
  popupFormAllInHTML,
  cardsContainer,
} from "./constants.js";
import { Popup } from "./Popup";

const enableFormValidation = (validatedForm) => {
  const formValidator = new FormValidator(formValidationConfig, validatedForm);
  formValidator.enableValidation();
  validatedForm.addEventListener("submit", function disableSubmit(event) {
    event.preventDefault();
  });
};
popupFormAllInHTML.forEach((validatedForm) => {
  enableFormValidation(validatedForm);
});

const handleCardClick = ({ name, link }) => {
  const popupWithImage = new PopupWithImage(name, link, popupWithEnlargedImage);
  popupWithImage.open();
  popupWithImage.setEventListeners(popupImgCloseBtn);
};

const createCard = (cardData) => {
  const cardInstance = new Card(cardData, cardTemplate, handleCardClick);
  return cardInstance.renderCard();
};

// Создание карточки при добавлении из формы.
const handleCardFormSubmit = (element) => {
  const newCard = {
    link: element.linkImg,
    name: element.nameCards,
  };
  sectionCard.addItem(createCard(newCard));
};

const renderer = (element) => {
  sectionCard.addItem(createCard(element));
};

const sectionCard = new Section(
  { items: initialCards, renderer: renderer },
  cardsContainer
);
sectionCard.rendererAllElements();

///////////////////////////////////////////////////////////////////////////
const handleProfileFormSubmit = (element) => {
  const profileData = {
    info: element.jobProfil,
    name: element.nameProfil,
  };
  handeleUserInfo(profileData);
};

const hendelInputValues = (values) => {
  profileNameInputFieldPopup.value = values.name;
  fieldEnteringTypeActivityPopup.value = values.info;
};
const userInfo = new UserInfo({ name: profileTitle, info: profileSubtitle });
const handeleUserInfo = (profileData) => {
  userInfo.setUserInfo(profileData.name, profileData.info);
};

const handlePopupProfail = (selectorPopup) => {
  const popupProfile = new PopupWithForm(
    selectorPopup,
    handleProfileFormSubmit
  );
  popupProfile.open();
  popupProfile.setEventListeners(buttonCloseProfilePopup);
};

profileEditButton.addEventListener("click", () => {
  handlePopupProfail(popupProfileEditing);
  hendelInputValues(userInfo.getUserInfo());
});
//////////////////////////////////////////////////////////////////////
const handlePopupAddCard = (selectorPopup) => {
  const popupAddCard = new PopupWithForm(selectorPopup, handleCardFormSubmit);
  popupAddCard.open();
  popupAddCard.setEventListeners(buttonClosePopupCards);
};

buttonOpeningPopupEditingCards.addEventListener("click", () => {
  handlePopupAddCard(popupAddingCards);
});
