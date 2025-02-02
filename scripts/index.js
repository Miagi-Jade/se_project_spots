const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafeName",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
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
const newPostButton = document.querySelector(".profile__button-new-post");
const newPostModal = document.querySelector("#card-modal");
const newPostClose = document.querySelector(".card-modal-close");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostName = newPostModal.querySelector("#card-caption-name_input");
const newPostLink = newPostModal.querySelector("#card-image-link_input");

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
  cardLinkElement.alt = data.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__button_liked");
  });

  return cardElement;
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

newPostClose.addEventListener("click", () => {
  closeModal(newPostModal);
});

modalCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});

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
}
newPostForm.addEventListener("submit", handleNewPostSubmit);

profileForm.addEventListener("submit", handleProfileFormSubmit);

/*for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
*/
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});
