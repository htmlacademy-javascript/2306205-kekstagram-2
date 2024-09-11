let currentEffectName;
let effectsLevelNumber;

const effectsListMap = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
  none: 'none'
};

const effectsUnitMap = {
  chrome: '',
  sepia: '',
  marvin: '%',
  phobos: 'px',
  heat: '',
  none: 'none'
};

const sliderPapameters = {
  chrome: {min: 0, max: 1, step: 0.1, start: 1},
  sepia: {min: 0, max: 1, step: 0.1, start: 1},
  marvin: {min: 0, max: 100, step: 1, start: 100},
  phobos: {min: 0, max: 3, step: 0.1, start: 3},
  heat: {min: 0, max: 3, step: 0.1, start: 3},
  none: {min: null, max: null, step: null, start: null},
};

const effectPhotoSliderContainer = document.querySelector('.img-upload__effect-level');
const effectPhotoSliderElement = document.querySelector('.effect-level__slider');
const imgElement = document.querySelector('.img-upload__preview img');
const effectsFieldset = document.querySelector('.effects');
const effectslevelValue = document.querySelector('.effect-level__value');


noUiSlider.create(effectPhotoSliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',

  format: {
    to: function (value) {
      return parseFloat(value).toFixed(1);
    },

    from: function (value) {
      return parseFloat(value).toFixed(1);
    }
  }
});

const sliderUpdatePapremeters = (effect) => {
  if (effectsListMap[effect] !== 'none') {
    effectPhotoSliderElement.noUiSlider.updateOptions({
      range: {
        min: sliderPapameters[effect].min,
        max: sliderPapameters[effect].max,
      },
      start: sliderPapameters[effect].start,
      step: sliderPapameters[effect].step
    });
  }
};


// Функция обновления фильтра изображения через style
const getImgFilter = () => {
  imgElement.style.filter = `${effectsListMap[currentEffectName]}(${effectsLevelNumber}${effectsUnitMap[currentEffectName]})`;
  effectPhotoSliderContainer.classList.remove('hidden');

  if (effectsListMap[currentEffectName] === 'none') {
    imgElement.style.filter = 'none';
    effectPhotoSliderContainer.classList.add('hidden');
  }
};

// Получаем значение от слайдера и обновляем фильтр изображения
const getLevelEffectfromSlider = () => {
  effectsLevelNumber = effectPhotoSliderElement.noUiSlider.get();
  effectslevelValue.value = effectsLevelNumber;
  getImgFilter();
};

effectPhotoSliderElement.noUiSlider.on('update', getLevelEffectfromSlider);

// Получаем значение от радиокнопок и обновляем фильтр изображения
const getTypeEffectsfromRadiobuttons = (evt) => {
  currentEffectName = evt.target.value;
  sliderUpdatePapremeters(currentEffectName);
  getImgFilter();
};

effectsFieldset.addEventListener('change', getTypeEffectsfromRadiobuttons);
