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

const cardTemplate = document.querySelector("#card-template");
const modalCloseButton = document.querySelector(".modal__button-close");
const profileEditButton = document.querySelector(".profile__button");
const profileEditModal = document.querySelector("#edit-profile-modal");
const cardsList = document.querySelector(".cards__list");
const profileTitle = document.querySelector(".profile__title");
const profileTitleModal = document.querySelector("#name_input");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileSubtitleModal = document.querySelector("#description_input");
const profileForm = document.querySelector(".modal__form");

function openModal() {
  profileTitleModal.value = profileTitle.textContent;
  profileSubtitleModal.value = profileSubtitle.textContent;
  profileEditModal.classList.add("modal_opened");
}

profileEditButton.addEventListener("click", openModal);

function getCardElement(data) {
  console.log(data);
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__caption");
  cardNameElement.textContent = data.Name;
  const cardLinkElement = cardElement.querySelector(".card__image");
  cardLinkElement.src = data.link;
  cardLinkElement.alt = data.Name;
  return cardElement;
}

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

modalCloseButton.addEventListener("click", closeModal);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleModal.value;
  profileSubtitle.textContent = profileSubtitleModal.value;
  closeModal();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
