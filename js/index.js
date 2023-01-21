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
// добавление карточек при загрузке
const cards = document.querySelector('.cards'); //нашел контейнер кда буду вставлять html разметку то есть template,
const template = document.querySelector('#element-card'); // нашел template в html,

const createCard = (name, link) => {
  const task = template.content.querySelector('.cards__item').cloneNode(true); //Клонирую html элемент li
  task.querySelector('.cards__img').src = link; //присваивает значение элемента link для src.
  task.querySelector('.cards__text').textContent = name; //присваивает значение элемента name для текста тега  h2.

  return task;

};

/*Функция добавления карточек в начало и передача значений из объекта при помщи
фигурных скобок {} так как йтем возвращает объкт с элементами name и link*/
const renderCard = ({name, link}) => {//функция получает элимент item.
  cards.prepend(createCard(name, link));
};

//перребор массива методом forEach и добавление каждего из  элементов маccива в атрибут item
initialCards.forEach((item) => {
 renderCard(item);
});

/*добавление функции которая будет добавлять новую
карточку на страницу на основе данных из фрмы*/
const inputTextNameCard = document.querySelector('.popup__input_text_name-card');//нашел поле формы для имени карточки что-бы получить значение
const inputImgLink = document.querySelector('.popup__input_img_link');//нашел поле формы для ссылки карточки что-бы получить значение
const submitCard = document.querySelector('.submit-card'); //нашел саму форму которая отправляет значение полей для новой карточкмю

const formAddCard = (evt) => {
  evt.preventDefault();

const velueNewCard = {// присвоил новые значения из формы для новой карточкм
  name: inputTextNameCard.value,
  link: inputImgLink.value

}

renderCard(velueNewCard);//вызвал функцию добавления карточки со значениями из формы
closePopupAddCards();//закрытие формы после нажания на кнопку
inputImgLink.value = ''; //очистил форму после сохранения
inputTextNameCard.value = '';
};

submitCard.addEventListener("submit", formAddCard);//событе при нажатии на кнопку отправляется форма для создание новой карточки



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


