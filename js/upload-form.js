import {initPopup} from './open-close-popup.js';
import {addScaleChangeListeners, resetScaleChanges} from './scale-control.js';
import {pristine} from './upload-form-validator.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadImgEditor = uploadForm.querySelector('.img-upload__overlay');
const closeUploadFormButton = uploadForm.querySelector('.img-upload__cancel');

const resetImgEditor = () => {
  resetScaleChanges();
  uploadForm.reset();
  pristine.reset();
};

const { openPopup } = initPopup(uploadImgEditor, closeUploadFormButton, resetImgEditor);

const openImgEditor = () => {
  openPopup();
};

const initUploadForm = () => {
  addScaleChangeListeners();
  uploadInput.addEventListener('change', openImgEditor);
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {initUploadForm};
