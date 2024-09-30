import {initPopup} from './open-close-popup.js';
import {addScaleChangeListeners, resetScaleChanges} from './scale-control.js';
import {pristine} from './upload-form-validator.js';
import {resetFilters} from './create-effects-slider.js';
import {sendData} from './api.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const uploadImgEditor = uploadForm.querySelector('.img-upload__overlay');
const closeUploadFormButton = uploadForm.querySelector('.img-upload__cancel');
const effectPhotoSliderContainer = document.querySelector('.img-upload__effect-level');


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};


const resetImgEditor = () => {
  resetScaleChanges();
  uploadForm.reset();
  pristine.reset();
  resetFilters();
  unblockSubmitButton();
};

const { openPopup, closePopup } = initPopup(uploadImgEditor, closeUploadFormButton, resetImgEditor);

const initUploadForm = () => {
  uploadInput.addEventListener('change', openPopup);
  addScaleChangeListeners();

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      sendData(formData, closePopup);
    }
  });

  hashtagsInput.addEventListener('keydown', (evt) => evt.stopPropagation());
  commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

  effectPhotoSliderContainer.classList.add('hidden');
};

export {initUploadForm, unblockSubmitButton};

