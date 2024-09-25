import {initPopup} from './open-close-popup.js';
import {addScaleChangeListeners, resetScaleChanges} from './scale-control.js';
import {pristine} from './upload-form-validator.js';
import {resetFilters} from './create-effects-slider.js';
import {createDataMessage} from './util.js';
import {sendData} from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadImgEditor = uploadForm.querySelector('.img-upload__overlay');
const closeUploadFormButton = uploadForm.querySelector('.img-upload__cancel');
const effectPhotoSliderContainer = document.querySelector('.img-upload__effect-level');

const resetImgEditor = () => {
  resetScaleChanges();
  uploadForm.reset();
  pristine.reset();
  resetFilters();
};

const { openPopup, closePopup } = initPopup(uploadImgEditor, closeUploadFormButton, resetImgEditor);

const initUploadForm = () => {
  uploadInput.addEventListener('change', openPopup);
  addScaleChangeListeners();

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      sendData(formData);
      closePopup();
      createDataMessage('success');
    }
  });

  hashtagsInput.addEventListener('keydown', (evt) => evt.stopPropagation());
  commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

  effectPhotoSliderContainer.classList.add('hidden');
};

export {initUploadForm};

