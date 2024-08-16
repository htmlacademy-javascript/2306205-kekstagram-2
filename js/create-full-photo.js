import {initComments, removeCommentsListener} from './create-comments.js';

const bodyPage = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img img');
const bigPictureCloseButton = bigPictureContainer.querySelector('#picture-cancel');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');
const bigPictureLikesAmount = bigPictureContainer.querySelector('.likes-count');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

const addClosePopupListener = () => {
  bigPictureCloseButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onDocumentKeydown);
};

const removeClosePopupListener = () => {
  bigPictureCloseButton.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openPopup = () => {
  bigPictureContainer.classList.remove('hidden');
  bodyPage.classList.add('modal-open');
  addClosePopupListener();
};

function closePopup () {
  bigPictureContainer.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
  removeClosePopupListener();
  removeCommentsListener();
}

const fillPopupData = ({url, description, likes}) => {
  bigPicture.src = url;
  bigPicture.alt = description;
  bigPictureLikesAmount.textContent = likes;
  bigPictureCaption.textContent = description;
};

const renderFullPhoto = (data) => {
  openPopup();
  fillPopupData(data);
  initComments(data.comments);
};

export {renderFullPhoto};
