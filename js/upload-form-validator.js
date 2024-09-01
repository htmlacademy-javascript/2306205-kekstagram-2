// Валидация хэштегов
const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const hashtagExample = /^#[a-zа-яё0-9]{1,19}$/i;
const messages = {
  match: 'Хэштеги начинаются с "#", состоят из букв (от 1 до 19) и отделяются пробелом',
  amount: 'Больше пяти хэштегов - это перебор. Давай сократим количество?',
  repeat: 'Одинаковые хэштеги - не ок. Давай удалим?'
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});


// Количество хэштегов не более 5
const checkAmountHashtags = (hashtagsArray) => hashtagsArray.length <= 5;

// Соответствие образцу
const matchHashtagExample = (hashtagsArray) => {
  if (hashtagsInput.value === '') {
    return true;
  } else {
    return hashtagsArray.every((hashtag) => hashtagExample.test(hashtag));
  }
};

// Одинаковые хэштеги
const checkRepeatHashtags = (hashtagsArray) => {
  const lowerCaseHashtags = hashtagsArray.map((hashtag) => hashtag.toLowerCase());
  const duplicates = new Set (lowerCaseHashtags);
  return duplicates.size === lowerCaseHashtags.length;
};

// Общая функция
const checkHashtags = () => {
  const hashtags = hashtagsInput.value.trim().split(' ');
  return matchHashtagExample(hashtags) && checkRepeatHashtags(hashtags) && checkAmountHashtags(hashtags);
};

// Создаем сообщения
const createMessage = () => {
  const hashtags = hashtagsInput.value.trim().split(' ');
  if (!checkAmountHashtags(hashtags)) {
    return messages.amount;
  } else if (!matchHashtagExample(hashtags)) {
    return messages.match;
  } else if (!checkRepeatHashtags(hashtags)) {
    return messages.repeat;
  }
};

pristine.addValidator(
  hashtagsInput,
  checkHashtags,
  createMessage
);

// Валидация длины комментария
const validateComment = () => commentInput.value.length <= 140;

pristine.addValidator(
  commentInput,
  validateComment,
  '"Длина коммментария не должна быть больше 140 символов" (Джек Дорси)'
);

export {pristine};
