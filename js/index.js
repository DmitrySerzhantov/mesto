const popupElement = document.querySelector(".popup-edit-add");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_text_name");
let jobInput = document.querySelector(".popup__input_text_job");
const cards = document.querySelector(".cards");
const popupCardsAdd = document.querySelector(".popup-cards-add");
const profileAddButton = document.querySelector(".profile__add-button");
const closeButtonAddCards = document.querySelector(".popup__close-addcards");
const textNameCard = document.querySelector(".popup__input_text_name-card");
const imgLink = document.querySelector(".popup__input_img_link");
const initialCards = [
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
initialCards.forEach((item) => {
  const itemCard = `
  <div class="cards__item">
    <img class="cards__img" src='${item.link}' alt="фото из карачаевска">
    <div class="cards__footer">
      <h2 class="cards__text">${item.name}</h2>
      <button class="cards__like" type="button" aria-label="лайк для карточки"></button>
    </div>
  </div>
`;
  cards.innerHTML += itemCard;
});

const openPopup =  () => {
  popupElement.classList.add("popup_open");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
};

const closePopup = () => {
  popupElement.classList.remove("popup_open");
};

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}
const openPopupAddCards = () => {
  popupCardsAdd.classList.add("popup_open");
};

const closePopupAddCards = () => {
  popupCardsAdd.classList.remove("popup_open");
};


const saveArrayElement =  (evt) => {
  evt.preventDefault();
  const addFormCard = {
    name: textNameCard.value,
    link: imgLink.value
  };
  const itemCard = `
  <div class="cards__item">
    <img class="cards__img" src='${addFormCard.link}' alt="фото карточки">
    <div class="cards__footer">
      <h2 class="cards__text">${addFormCard.name}</h2>
      <button class="cards__like" type="button" aria-label="лайк для карточки"></button>
    </div>
  </div>
`;

  cards.insertAdjacentHTML('afterbegin', itemCard );
  initialCards.unshift(addFormCard);
  closePopupAddCards();
}


profileEditButton.addEventListener("click", openPopup);
closeButtonProfile.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
profileAddButton.addEventListener("click", openPopupAddCards);
closeButtonAddCards.addEventListener("click", closePopupAddCards);
popupCardsAdd.addEventListener("submit", saveArrayElement);

