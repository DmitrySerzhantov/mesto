import { Card } from "./Card.js";
import { initialCards } from "./constants.js";

const popupProfileEditing = document.querySelector(".popup-edit-add");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileNameInputFieldPopup = document.querySelector(
  ".popup__input_text_name"
);
const fieldEnteringTypeActivityPopup = document.querySelector(
  ".popup__input_text_job"
);
const popupAddingCards = document.querySelector(".popup-cards-add");
const buttonOpeningPopupEditingCards = document.querySelector(
  ".profile__add-button"
);
const closeButtonAddCards = document.querySelector(".popup__close-addcards");
const popupWithEnlargedImage = document.querySelector(".popup-img"); //попап с изображением
const popupImgCloseBtn = document.querySelector(".popup-img__close-btn"); //нашел кнопку закрытия попапа
const template = document.querySelector("#element-card").content; // нашел template в html,
const inputTextNameCard = document.querySelector(
  ".popup__input_text_name-card"
); //нашел поле формы для имени карточки что-бы получить значение
const inputImgLink = document.querySelector(".popup__input_img_link"); //нашел поле формы для ссылки карточки что-бы получить значение
const formCard = document.querySelector(".submit-card");
const elementsOverlayPopup = document.querySelectorAll(".popup");

// zoom Картинки.
const handlePopupImg = () => {
  openPopup(popupWithEnlargedImage);
};

// Создание карточек при запуске страници .
initialCards.forEach((item) => {
  const card = new Card(item, template, handlePopupImg);
  const createCard = card.createCard();
});

// Создание карточки при добавлении из формы.
const submitAddCardForm = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: inputTextNameCard.value,
    link: inputImgLink.value,
  };
  const card = new Card(cardData, template, handlePopupImg);
  const createCard = card.createCard();
  formCard.reset();
  closePopup(popupAddingCards);
};

function submitEditProfileForm(evt) {
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

const arrOverlay = [...elementsOverlayPopup];

arrOverlay.forEach((event) => {
  const closePopupByClickOverlay = (event) => {
    if (event.target === event.currentTarget) {
      closePopup(event.currentTarget);
    }
  };
  event.addEventListener("click", closePopupByClickOverlay);
});

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  }
}

buttonOpeningPopupEditingCards.addEventListener("click", () => {
  openPopup(popupAddingCards);
});

profileEditButton.addEventListener("click", () => {
  openPopup(popupProfileEditing);
  profileNameInputFieldPopup.value = profileTitle.textContent;
  fieldEnteringTypeActivityPopup.value = profileSubtitle.textContent;
});

closeButtonAddCards.addEventListener("click", () =>
  closePopup(popupAddingCards)
);
popupCloseButton.addEventListener("click", () =>
  closePopup(popupProfileEditing)
);
popupProfileEditing.addEventListener("submit", submitEditProfileForm);
popupImgCloseBtn.addEventListener("click", () =>
  closePopup(popupWithEnlargedImage)
);
popupAddingCards.addEventListener("submit", submitAddCardForm); //событе при нажатии на кнопку отправляется форма для создание новой карточки
