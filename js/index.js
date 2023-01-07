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
