const popupProfileEditing = document.querySelector(".popup-edit-add");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileNameInputFieldPopup = document.querySelector( ".popup__input_text_name");
const fieldEnteringTypeActivityPopup = document.querySelector( ".popup__input_text_job");
const popupAddingCards = document.querySelector(".popup-cards-add");
const buttonOpeningPopupEditingCards = document.querySelector( ".profile__add-button");
const closeButtonAddCards = document.querySelector(".popup__close-addcards");
const popupWithEnlargedImage = document.querySelector(".popup-img"); //попап с изображением
const linkFromImagePopup = popupWithEnlargedImage.querySelector(".popup-img__image"); // изображение в попапе
const popupNameImg = popupWithEnlargedImage.querySelector( ".popup-img__name-img"); //имя изображение в попапе
const popupImgCloseBtn = document.querySelector(".popup-img__close-btn"); //нашел кнопку закрытия попапа
const cardContainer = document.querySelector(".cards"); //нашел контейнер кда буду вставлять html разметку то есть template,
const template = document.querySelector("#element-card"); // нашел template в html,
const inputTextNameCard = document.querySelector(".popup__input_text_name-card"); //нашел поле формы для имени карточки что-бы получить значение
const inputImgLink = document.querySelector(".popup__input_img_link"); //нашел поле формы для ссылки карточки что-бы получить значение
const formCard = document.querySelector(".submit-card");
const elementsOverlayPopup = document.querySelectorAll(".popup");


const createCard = (name, link) => {
  const copyElementTemplate = template.content
    .querySelector(".cards__item")
    .cloneNode(true); //Клонирую html элемент li
  copyElementTemplate.querySelector(".cards__img").src = link; //присваивает значение элемента link для src.
  copyElementTemplate.querySelector(".cards__text").textContent = name; //присваивает значение элемента name для текста тега  h2.
  copyElementTemplate.querySelector(".cards__img").alt = name;
  //Добавил возможность ставить лайки
  const cardsLike = copyElementTemplate.querySelector(".cards__like"); //нашел сам лайк
  const setLikeCard = () => {
    cardsLike.classList.toggle("cards__like_color_black"); //Функция добавления и удаления лайка через classList.toggle.
  };
  cardsLike.addEventListener("click", setLikeCard);

  const cardsTrash = copyElementTemplate.querySelector(".cards__trash"); //нашел кнопку удаления карточки
  cardsTrash.addEventListener("click", () => {
    //слушатель кнопки удаления при клике на которую удаляется карточка.
    copyElementTemplate.remove();
  });

  const cardImg = copyElementTemplate.querySelector(".cards__img"); // нашел изображение из карточки что-бы повесить на нее слушателя.

  const fillInImageData = () => {
    linkFromImagePopup.src = link;
    popupNameImg.textContent = name;
    linkFromImagePopup.alt = name;
  };

  cardImg.addEventListener("click", () => {
    fillInImageData();
    openPopup(popupWithEnlargedImage);
  });

  return copyElementTemplate;
};

const addCard = ({ name, link }) => {
  cardContainer.prepend(createCard(name, link));
};

initialCards.forEach((item) => {
  addCard(item);
});

const submitAddCardForm = (evt) => {
 evt.preventDefault();
  const cardData = {
    // присвоил новые значения из формы для новой карточкм
    name: inputTextNameCard.value,
    link: inputImgLink.value,

  };

  addCard(cardData);
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



const formsValidity = (form, config ) => {
  buttonOpeningPopupEditingCards.addEventListener("click", () => {
    openPopup(popupAddingCards);
    toggleButton(form, config);

  });


};
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfileEditing);
  profileNameInputFieldPopup.value = profileTitle.textContent;
  fieldEnteringTypeActivityPopup.value = profileSubtitle.textContent;

});

closeButtonAddCards.addEventListener("click", () =>  closePopup(popupAddingCards));
popupCloseButton.addEventListener("click", () => closePopup(popupProfileEditing)
);
popupProfileEditing.addEventListener("submit", submitEditProfileForm);
popupImgCloseBtn.addEventListener("click", () =>
  closePopup(popupWithEnlargedImage)
);
popupAddingCards.addEventListener("submit", submitAddCardForm); //событе при нажатии на кнопку отправляется форма для создание новой карточки
