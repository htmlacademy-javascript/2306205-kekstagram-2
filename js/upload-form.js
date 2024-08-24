import {openPopup, closePopup, addClosePopupListener, removeClosePopupListener} from './open-close-popup.js';
import {changeScale, resetScale} from './scale-control.js';


const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadImgEditor = uploadForm.querySelector('.img-upload__overlay');
const closeUploadFormButton = uploadForm.querySelector('.img-upload__cancel');

const closeImgEditor = () => {
  closePopup(uploadImgEditor);
  removeClosePopupListener(closeUploadFormButton, closeImgEditor);
  resetScale();
  uploadForm.reset();
};

const openImgEditor = () => {
  openPopup(uploadImgEditor);
  changeScale();
  addClosePopupListener(closeUploadFormButton, closeImgEditor);
};

const openUploadForm = () => {
  uploadInput.addEventListener('change', openImgEditor);
};

openUploadForm();


export {uploadForm};
