const initialCards = [
  {
    Name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    Name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    Name: "An outdoor cafeName",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    Name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    Name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    Name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
console.log(initialCards);

const profileEditButton = document.querySelector(".profile__button");
const profileEditModal = document.querySelector("#edit-profile-modal");

function openModal() {
  profileTitleModal.value = profileTitle.textContent;
  profileSubtitleModal.value = profileSubtitle.textContent;
  profileEditModal.classList.add("modal_opened");
}

profileEditButton.addEventListener("click", openModal);

const modalCloseButton = document.querySelector(".modal__button-close");

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

modalCloseButton.addEventListener("click", closeModal);

const profileTitle = document.querySelector(".profile__title");
const profileTitleModal = document.querySelector("#name_input");

const profileSubtitle = document.querySelector(".profile__subtitle");
const profileSubtitleModal = document.querySelector("#description_input");
const profileForm = document.querySelector(".modal__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleModal.value;
  profileSubtitle.textContent = profileSubtitleModal.value;
  closeModal();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
