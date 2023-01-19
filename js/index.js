const popupElement = document.querySelector(".popup-edit-add");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_text_name");
let jobInput = document.querySelector(".popup__input_text_job");
const popupCardsAdd = document.querySelector(".popup-cards-add");
const profileAddButton = document.querySelector(".profile__add-button");
const closeButtonAddCards = document.querySelector(".popup__close-addcards");
const popupInputTextNameCard = document.querySelector('.popup__input_text_name-card');
const popupInputImgLink = document.querySelector('.popup__input_img_link');
const submitCard = document.querySelector('.submit-card');


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

  const cards = document.querySelector('.cards');
  const template = document.querySelector('.element-card').content;


const createsArrey = initialCards.map((item) => {
  return {
    name: item.name,
    link: item.link
  };
});

function rendor ()  {
  createsArrey.forEach(rebdorCard);
}

function rebdorCard({name, link}) {
  const addElement = template.querySelector('.cards__item').cloneNode(true);
  addElement.querySelector('.cards__text').textContent = name;
  addElement.querySelector('.cards__img').src = link;


  cards.append(addElement);
}
rendor();
function handCardSubmit(evt) {
  evt.preventDefault();
  const addNewElement = template.querySelector('.cards__item').cloneNode(true);
  addNewElement .querySelector('.cards__text').textContent = popupInputTextNameCard.value;
  addNewElement .querySelector('.cards__img').src = popupInputImgLink.value;
  cards.prepend(addNewElement);
  closePopupAddCards();

}
submitCard.addEventListener("submit", handCardSubmit);







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


profileEditButton.addEventListener("click", openPopup);
closeButtonProfile.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
profileAddButton.addEventListener("click", openPopupAddCards);
closeButtonAddCards.addEventListener("click", closePopupAddCards);


