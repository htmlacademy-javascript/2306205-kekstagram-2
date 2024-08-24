import {uploadForm} from './upload-form.js';

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const hashtagExample = /^#[a-zа-яё0-9]{1,19}$/i;

const validateHashTags = () => {
  if (hashtagsInput.value === '') {
    return true;
  } else {
    const hashtags = hashtagsInput.value.split(' ');
    const isValidated = hashtags.every((hashtag) => hashtagExample.test(hashtag));
    return isValidated;
  }
};

const validateComment = () => commentInput.value.length <= 140;

pristine.addValidator(
  commentInput,
  validateComment,
  'Длина коммментария не должна быть больше 140 символов'
);

pristine.addValidator(
  hashtagsInput,
  validateHashTags,
  'Хэштеги должны начинаться с символа "#" и разделяться пробелом'
);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
