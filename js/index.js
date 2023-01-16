const popupElement = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_text_name");
let jobInput = document.querySelector(".popup__input_text_job");
const cards = document.querySelector('.cards');
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
initialCards.forEach((name) => {
  const itemCard =
  `
  <div class="cards__item">
    <img class="cards__img" src='${name.link}' alt="фото из карачаевска">
    <div class="cards__footer">
      <h2 class="cards__text">${name.name}</h2>
      <button class="cards__like" type="button" aria-label="лайк для карточки"></button>
    </div>
  </div>

`
cards.innerHTML += itemCard;
})



const openPopup = function () {
  popupElement.classList.add("popup_open");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

const closePopup = function () {
  popupElement.classList.remove("popup_open");
};

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", openPopup);
closeButtonProfile.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);


