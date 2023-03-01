import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./constants.js";
import { formValidationConfig } from "./validate.js";

const popupProfileEditing = document.querySelector(".popup-edit-add");
const profileEditButton = document.querySelector(".profile__edit-button");
const buttonCloseProfilePopup = document.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileNameInputFieldPopup = document.querySelector(".popup__input_text_name");
const fieldEnteringTypeActivityPopup = document.querySelector(".popup__input_text_job");
const popupAddingCards = document.querySelector(".popup-cards-add");
const buttonOpeningPopupEditingCards = document.querySelector(".profile__add-button");
const closeButtonAddCards = document.querySelector(".popup__close-addcards");
const popupWithEnlargedImage = document.querySelector(".popup-img"); //попап с изображением
const popupImgCloseBtn = document.querySelector(".popup-img__close-btn"); //нашел кнопку закрытия попапа
const cardTemplate = document.querySelector("#element-card").content; // нашел template в html,
const inputTextNameCard = document.querySelector(".popup__input_text_name-card"); //нашел поле формы для имени карточки что-бы получить значение
const inputImgLink = document.querySelector(".popup__input_img_link"); //нашел поле формы для ссылки карточки что-бы получить значение
const formCard = document.querySelector(".submit-card");
const popupAllInHTML = document.querySelectorAll(".popup");
const imgpopup = popupWithEnlargedImage.querySelector(".popup-img__image");
const nameIMGpopup = popupWithEnlargedImage.querySelector(".popup-img__name-img");

// zoom Картинки.
const handleOpenPopupImg  = (imgElementpopup) => {
  imgpopup.src = imgElementpopup.src;
  nameIMGpopup.textContent = imgElementpopup.alt;
  imgpopup.alt = imgElementpopup.alt;
  openPopup(popupWithEnlargedImage);
  };

const validationForm = (validatedPopup) => {
  const formValidator = new FormValidator(formValidationConfig, validatedPopup);
  formValidator.enableValidation();
  validatedPopup.addEventListener("submit", function disableSubmit (event) {
    event.preventDefault();
  });}
;
popupAllInHTML.forEach((validatedPopup) => {
  validationForm(validatedPopup);
 });

const createCard = (cardData) => {
  const cardInstance = new Card(cardData, cardTemplate, handleOpenPopupImg );
  document.querySelector(".cards").prepend(cardInstance.renderCard());
}


// Создание карточек при запуске страници .
initialCards.forEach((cardData) => {
  createCard(cardData)
});

// Создание карточки при добавлении из формы.
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const cardDataNewCard = {
    name: inputTextNameCard.value,
    link: inputImgLink.value,
  };
  createCard(cardDataNewCard);
  formCard.reset();
  closePopup(popupAddingCards);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInputFieldPopup.value;
  profileSubtitle.textContent = fieldEnteringTypeActivityPopup.value;
  closePopup(popupProfileEditing);
}

const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closeByEscape);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closeByEscape);
};

const arrOverlay = [...popupAllInHTML];

arrOverlay.forEach((overlay) => {
  const closePopupByClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      closePopup(event.currentTarget);
    }
  };
  overlay.addEventListener("click", closePopupByClickOverlay);
});

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  }
}

const openingPopupProfileEditing = () => {
  openPopup(popupProfileEditing);
  profileNameInputFieldPopup.value = profileTitle.textContent;
  fieldEnteringTypeActivityPopup.value = profileSubtitle.textContent;
}


buttonOpeningPopupEditingCards.addEventListener("click", () => {
  openPopup(popupAddingCards);
});

profileEditButton.addEventListener("click", openingPopupProfileEditing);

closeButtonAddCards.addEventListener("click", () =>
  closePopup(popupAddingCards)
);
buttonCloseProfilePopup.addEventListener("click", () =>
  closePopup(popupProfileEditing)
);
popupProfileEditing.addEventListener("submit", handleProfileFormSubmit);
popupImgCloseBtn.addEventListener("click", () =>
  closePopup(popupWithEnlargedImage)
);
popupAddingCards.addEventListener("submit", handleCardFormSubmit); //событе при нажатии на кнопку отправляется форма для создание новой карточки
