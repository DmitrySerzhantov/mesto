const popupElement = document.querySelector(".popup");
const editButtonProfile = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close");
const addCardsButton = document.querySelector(".profile__add-button");
const popupAddCards = document.querySelector(".popup-add-cards");
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const openPopup = function () {
  popupElement.classList.add("popup_open");
};

const closePopup = function () {
  popupElement.classList.remove("popup_open");
};

const openPopupAddButton = function () {
  popupAddCards.classList.add("popup_open");
};

const closePopupAddCards = function () {
  popupAddCards.classList.remove("popup_open");
};


editButtonProfile.addEventListener("click", openPopup);
closeButtonProfile.addEventListener("click", closePopup);
addCardsButton.addEventListener("click", openPopupAddButton);
closeButtonProfile.addEventListener("click", closePopupAddCards);

// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); 
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__name-form");
let jobInput = document.querySelector(".popup__profession"); 
let popupButton = document.querySelector(".popup__button");
let valnameInput = nameInput.value;
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault();
  // Так мы можем определить свою логику отправки.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  nameInput.value;
  jobInput.value;
  // Получите значение полей jobInput и nameInput из свойства value
  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");

  // Выберите элементы, куда должны быть вставлены значения полей
  (profileTitle.textContent = nameInput.value),
    (profileSubtitle.textContent = jobInput.value);
  popupElement.classList.remove("popup_open");

  // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
