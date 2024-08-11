import {initComments} from './create-comments.js';

const bodyPage = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img img');
const bigPictureCloseButton = bigPictureContainer.querySelector('#picture-cancel');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');
const bigPictureLikesAmount = bigPictureContainer.querySelector('.likes-count');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhotoPopup();
  }
};

const openFullPhotoPopup = () => {
  bigPictureContainer.classList.remove('hidden');
  bodyPage.classList.add('modal-open');
};

function closePhotoPopup () {
  bigPictureContainer.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
}

const onCloseButtonPress = () => {
  bigPictureCloseButton.addEventListener('click', closePhotoPopup);
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderFullPhotoPopup = ({url, description, likes, comments}) => {
  openFullPhotoPopup();
  bigPicture.src = url;
  bigPicture.alt = description;
  bigPictureLikesAmount.textContent = likes;
  bigPictureCaption.textContent = description;
  onCloseButtonPress();
  initComments(comments);
};

export {renderFullPhotoPopup};
