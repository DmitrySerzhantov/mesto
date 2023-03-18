export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: "popup__input_type_error",
  buttonSelektor: ".popup__button",
  disabledClass: "popup__button_style_disabled",
};

export const popupProfileEditing = document.querySelector(".popup-edit-add");
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const buttonCloseProfilePopup = document.querySelector(".popup__close");
export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const profileNameInputFieldPopup = document.querySelector(
  ".popup__input_text_name"
);
export const fieldEnteringTypeActivityPopup = document.querySelector(
  ".popup__input_text_job"
);
export const popupAddingCards = document.querySelector(".popup-cards-add");
export const buttonOpeningPopupEditingCards = document.querySelector(
  ".profile__add-button"
);
export const buttonClosePopupCards = document.querySelector(
  ".popup__close-addcards"
);
export const popupWithEnlargedImage = document.querySelector(".popup-img"); //попап с изображением
export const popupImgCloseBtn = document.querySelector(".popup-img__close-btn"); //нашел кнопку закрытия попапа
export const cardTemplate = document.querySelector("#element-card").content; // нашел template в html,
export const popupFormAllInHTML = document.querySelectorAll(".popup__form");
export const cardsContainer = document.querySelector(".cards");
