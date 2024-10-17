// Валидация хэштегов
const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const hashtagExample = /[a-zа-яё0-9]/i;
const hashtagStartSymbol = /^#/;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

// ФУНКЦИИ ДЛЯ ВАЛИДАЦИИ
// Хэштег начинается с решетки
const checkHashtagStart = (hashtagsArray) => hashtagsArray.every((hashtag) => hashtagStartSymbol.test(hashtag));

// Хэштег соответствует образцу
const matchHashtagExample = (hashtagsArray) => hashtagsArray.every((hashtag) => hashtagExample.test(hashtag));

// Одинаковые хэштеги
const checkRepeatHashtags = (hashtagsArray) => {
  const lowerCaseHashtags = hashtagsArray.map((hashtag) => hashtag.toLowerCase());
  const duplicates = new Set (lowerCaseHashtags);
  return duplicates.size === lowerCaseHashtags.length;
};

// Количество хэштегов не более 5
const checkAmountHashtags = (hashtagsArray) => hashtagsArray.length <= 5;

// Хэштег не длиннее 20 символов
const checkHashtagsLength = (hashtagsArray) => hashtagsArray.every((hashtag) => hashtag.length < 20);

// Найдем решетку в хэштеге
const checkHashtagIncludesHash = (hashtagsArray) => {
  for (const hashtag of hashtagsArray) {
    if (hashtag.slice(1).includes('#')) {
      return false;
    }
  }
  return true;
};

// Объект с функциями проверки и текстами ошибок
const ErrorsMap = {
  start: {checkFunc: checkHashtagStart, text: 'Хэштег должен начинаться с решетки "#"'},
  match: {checkFunc: matchHashtagExample, text: 'Хэштег должен состоять из букв и цифр, хотя бы одной'},
  amount: {checkFunc: checkAmountHashtags, text: 'Больше пяти хэштегов - это слишком много'},
  repeat: {checkFunc: checkRepeatHashtags, text: 'Одинаковых хэштегов быть не должно'},
  length: {checkFunc: checkHashtagsLength, text: 'Хэштег не должен быть длинее 20 символов'},
  include: {checkFunc: checkHashtagIncludesHash, text: 'Хэштеги должны разделяться пробелом'}
};

// Общая функция проверки для валидатора
let errorMessage = null;

const checkHashtags = () => {
  const hashtags = hashtagsInput.value
    .trim()
    .split(' ')
    .filter((hahtag) => hahtag !== '');

  for (const error in ErrorsMap) {
    if (!ErrorsMap[error].checkFunc(hashtags)) {
      errorMessage = ErrorsMap[error].text;
      return false;
    }
  }
  return true;
};

// Функция возврата сообщения об ошибке для валиадатора
const getErrorMessage = () => errorMessage;

// Запускаем валидатор
pristine.addValidator(
  hashtagsInput,
  checkHashtags,
  getErrorMessage
);

// Валидация длины комментария
const validateComment = () => commentInput.value.length <= 140;

pristine.addValidator(
  commentInput,
  validateComment,
  'Длина коммментария не должна быть больше 140 символов'
);

export {pristine};
