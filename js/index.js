const popupElement = document.querySelector(".popup-edit-add");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_text_name");
const jobInput = document.querySelector(".popup__input_text_job");
const popupCardsAdd = document.querySelector(".popup-cards-add");
const profileAddButton = document.querySelector(".profile__add-button");
const closeButtonAddCards = document.querySelector(".popup__close-addcards");
const popupImg = document.querySelector(".popup-img"); //попап с изображением
const popupImgImage = popupImg.querySelector(".popup-img__image"); // изображение в попапе
const popupNameImg = popupImg.querySelector(".popup-img__name-img"); //имя изображение в попапе
const popupImgCloseBtn = document.querySelector(".popup-img__close-btn"); //нашел кнопку закрытия попапа
const popup = document.querySelector(".popup");
const cards = document.querySelector(".cards"); //нашел контейнер кда буду вставлять html разметку то есть template,
const template = document.querySelector("#element-card"); // нашел template в html,

const createCard = (name, link) => {
  const task = template.content.querySelector(".cards__item").cloneNode(true); //Клонирую html элемент li
  task.querySelector(".cards__img").src = link; //присваивает значение элемента link для src.
  task.querySelector(".cards__text").textContent = name; //присваивает значение элемента name для текста тега  h2.
  task.querySelector(".cards__img").alt = name;
  //Добавил возможность ставить лайки
  const cardsLike = task.querySelector(".cards__like"); //нашел сам лайк
  const like = () => {
    cardsLike.classList.toggle("cards__like_color_black"); //Функция добавления и удаления лайка через classList.toggle.
  };
  cardsLike.addEventListener("click", like);

  const cardsTrash = task.querySelector(".cards__trash"); //нашел кнопку удаления карточки
  cardsTrash.addEventListener("click", () => {
    //слушатель кнопки удаления при клике на которую удаляется карточка.
    task.remove();
  });

  const cardsImg = task.querySelector(".cards__img"); // нашел изображение из карточки что-бы повесить на нее слушателя.

  const openImg = () => {
    popupImgImage.src = link;
    popupNameImg.textContent = name;
    popupImgImage.alt = name;
  };

  cardsImg.addEventListener("click", () => {
    openImg();
    openPopup(popupImg);
  });

  return task;
};

/*Функция добавления карточек в начало и передача значений из объекта при помщи
фигурных скобок {} так как йтем возвращает объкт с элементами name и link*/
const renderCard = ({ name, link }) => {
  //функция получает элимент item.
  cards.prepend(createCard(name, link));
};

//перребор массива методом forEach и добавление каждего из  элементов маccива в атрибут item
initialCards.forEach((item) => {
  renderCard(item);
});

/*добавление функции которая будет добавлять новую
карточку на страницу на основе данных из фрмы*/
const inputTextNameCard = document.querySelector(
  ".popup__input_text_name-card"
); //нашел поле формы для имени карточки что-бы получить значение
const inputImgLink = document.querySelector(".popup__input_img_link"); //нашел поле формы для ссылки карточки что-бы получить значение
const submitCard = document.querySelector(".submit-card"); //нашел саму форму которая отправляет значение полей для новой карточкмю

const formAddCard = (evt) => {
  evt.preventDefault();
  const velueNewCard = {
    // присвоил новые значения из формы для новой карточкм
    name: inputTextNameCard.value,
    link: inputImgLink.value,
  };

  renderCard(velueNewCard); //вызвал функцию добавления карточки со значениями из формы
  closePopupAddCards(); //закрытие формы после нажания на кнопку
  inputImgLink.value = ""; //очистил форму после сохранения
  inputTextNameCard.value = "";
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

const openPopup = (popup) => {
  popup.classList.add("popup_open");
};

const closePopup = (popup) => {
  popup.classList.remove("popup_open");
};

profileEditButton.addEventListener("click", () => openPopup(popupElement));
profileAddButton.addEventListener("click", () => openPopup(popupCardsAdd));
closeButtonAddCards.addEventListener("click", () => closePopup(popupCardsAdd));
closeButtonProfile.addEventListener("click", () => closePopup(popupElement));
popupElement.addEventListener("submit", handleFormSubmit);
popupImgCloseBtn.addEventListener("click", () => closePopup(popupImg));
submitCard.addEventListener("submit", formAddCard); //событе при нажатии на кнопку отправляется форма для создание новой карточки
