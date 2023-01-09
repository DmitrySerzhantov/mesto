const popupElement = document.querySelector(".popup");
const editButtonProfile = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close");

const open_popup = function () {
  popupElement.classList.add("popup_open");
};

const closePopup = function () {
  popupElement.classList.remove("popup_open");
};

editButtonProfile.addEventListener("click", open_popup);
closeButtonProfile.addEventListener("click", closePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__name-form"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__profession"); // Воспользуйтесь инструментом .querySelector()
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
