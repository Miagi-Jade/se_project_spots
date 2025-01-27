const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    altText: "Val Thorens",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    altText: "Restaurant terrace",
  },

  {
    name: "An outdoor cafeName",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    altText: "An outdoor cafeName",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    altText: "A very long bridge, over the forest and through the trees",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    altText: "Tunnel with morning light",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    altText: "Mountain house",
  },

  {
    name: "Red Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
    altText: "Red Bridge",
  },
];

const cardTemplate = document.querySelector("#card-template");
const profileEditButton = document.querySelector(".profile__button");
const profileEditModal = document.querySelector("#edit-profile-modal");
const cardsList = document.querySelector(".cards__list");
const profileTitle = document.querySelector(".profile__title");
const profileTitleModal = document.querySelector("#name_input");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileSubtitleModal = document.querySelector("#description_input");
const profileForm = document.querySelector(".modal__form");
const newPostButton = document.querySelector(".profile__button-new-post");
const newPostModal = document.querySelector("#card-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostName = newPostModal.querySelector("#card-caption-name_input");
const newPostLink = newPostModal.querySelector("#card-image-link_input");
const previewModal = document.querySelector("#preview-modal");
const modalImageLink = document.querySelector(".modal__image-preview");
const modalImageCaption = document.querySelector(".modal__caption-preview");
const closeButtons = document.querySelectorAll(".modal__button-close");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

newPostButton.addEventListener("click", () => {
  openModal(newPostModal);
});

profileEditButton.addEventListener("click", () => {
  profileTitleModal.value = profileTitle.textContent;
  profileSubtitleModal.value = profileSubtitle.textContent;
  openModal(profileEditModal);
});

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const likeButton = cardElement.querySelector(".card__button");
  const cardNameElement = cardElement.querySelector(".card__caption");
  const cardLinkElement = cardElement.querySelector(".card__image");

  cardNameElement.textContent = data.name;
  cardLinkElement.src = data.link;
  cardLinkElement.alt = data.altText;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__button_liked");
  });
  cardLinkElement.addEventListener("click", () => {
    openModal(previewModal);
    modalImageLink.src = data.link;
    modalImageCaption.textContent = data.name;
  });

  const cardDeleteButton = cardElement.querySelector(".card__button-delete");

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  return cardElement;
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleModal.value;
  profileSubtitle.textContent = profileSubtitleModal.value;
  closeModal(profileEditModal);
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostLink.value);
  console.log(newPostName.value);
  const inputValue = { name: newPostName.value, link: newPostLink.value };
  const cardElement = getCardElement(inputValue);
  cardsList.prepend(cardElement);
  closeModal(newPostModal);
  evt.target.reset();
}
newPostForm.addEventListener("submit", handleNewPostSubmit);

profileForm.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closeModal(popup));
});
