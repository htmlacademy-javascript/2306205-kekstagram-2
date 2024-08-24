import {initComments, removeCommentsListener} from './create-comments.js';
import {openPopup, closePopup, addClosePopupListener, removeClosePopupListener} from './open-close-popup.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img img');
const bigPictureCloseButton = bigPictureContainer.querySelector('#picture-cancel');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');
const bigPictureLikesAmount = bigPictureContainer.querySelector('.likes-count');

const closeFullPhotoPopup = () => {
  closePopup(bigPictureContainer);
  removeClosePopupListener(bigPictureCloseButton, closeFullPhotoPopup);
  removeCommentsListener();
};

const openFullPhotoPopup = () => {
  openPopup(bigPictureContainer);
  addClosePopupListener(bigPictureCloseButton, closeFullPhotoPopup);
};

const fillPopupData = ({url, description, likes}) => {
  bigPicture.src = url;
  bigPicture.alt = description;
  bigPictureLikesAmount.textContent = likes;
  bigPictureCaption.textContent = description;
};

const renderFullPhoto = (data) => {
  openFullPhotoPopup();
  fillPopupData(data);
  initComments(data.comments);
};

export {renderFullPhoto};
