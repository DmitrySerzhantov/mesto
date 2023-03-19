import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import {
  formValidationConfig,
  initialCards,
  profileEditButton,
  profileTitle,
  profileSubtitle,
  buttonOpeningPopupEditingCards,
  cardTemplate,
  popupFormAllInHTML,
  cardsContainer,
} from "../utils/constants.js";
import { Popup } from "../components/Popup";

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
    info: element.info,
    name: element.name,
  };
  handeleUserInfo(profileData);
};

const userInfo = new UserInfo({ name: profileTitle, info: profileSubtitle });
const handeleUserInfo = (profileData) => {
  userInfo.setUserInfo(profileData.name, profileData.info);
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
