const popupElement = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close");

const open_popup = function () {
  popupElement.classList.add("popup_open");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
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

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", openPopup);
closeButtonProfile.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);


!!!!
