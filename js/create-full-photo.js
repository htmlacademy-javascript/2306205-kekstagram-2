import {initComments, removeCommentsListener} from './create-comments.js';
import {initPopup} from './open-close-popup.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img img');
const bigPictureCloseButton = bigPictureContainer.querySelector('#picture-cancel');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');
const bigPictureLikesAmount = bigPictureContainer.querySelector('.likes-count');

const closeFullPhotoPopup = () => {
  removeCommentsListener();
};

const { openPopup } = initPopup(bigPictureContainer, bigPictureCloseButton, closeFullPhotoPopup);


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
