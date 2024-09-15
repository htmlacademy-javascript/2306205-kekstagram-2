import {initPopup} from './open-close-popup.js';
import {addScaleChangeListeners, resetScaleChanges} from './scale-control.js';
import {pristine} from './upload-form-validator.js';
import {resetFilters} from './create-effects-slider.js';


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

const { openPopup } = initPopup(uploadImgEditor, closeUploadFormButton, resetImgEditor);

const initUploadForm = () => {
  addScaleChangeListeners();

  uploadInput.addEventListener('change', openPopup);

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });

  hashtagsInput.addEventListener('keydown', (evt) => evt.stopPropagation());
  commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

  effectPhotoSliderContainer.classList.add('hidden');
};

export {initUploadForm};

