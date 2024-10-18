let currentEffectName = 'none';
let effectsLevelNumber = 1;

const sliderParameters = {
  chrome: {min: 0, max: 1, step: 0.1, start: 1, cssFunc: 'grayscale', unit: ''},
  sepia: {min: 0, max: 1, step: 0.1, start: 1, cssFunc: 'sepia', unit: ''},
  marvin: {min: 0, max: 100, step: 1, start: 100, cssFunc: 'invert', unit: '%'},
  phobos: {min: 0, max: 3, step: 0.1, start: 3, cssFunc: 'blur', unit: 'px'},
  heat: {min: 0, max: 3, step: 0.1, start: 3, cssFunc: 'brightness', unit: ''},
  none: {min: null, max: null, step: null, start: null, cssFunc: null, unit: null},
};

const effectPhotoSliderContainer = document.querySelector('.img-upload__effect-level');
const effectPhotoSliderElement = document.querySelector('.effect-level__slider');
const imgElement = document.querySelector('.img-upload__preview img');
const effectsFieldset = document.querySelector('.effects');
const effectslevelValue = document.querySelector('.effect-level__value');


const sliderUpdatePapremeters = (effect) => {
  if (effect !== 'none') {
    effectPhotoSliderElement.noUiSlider.updateOptions({
      range: {
        min: sliderParameters[effect].min,
        max: sliderParameters[effect].max,
      },
      start: sliderParameters[effect].start,
      step: sliderParameters[effect].step
    });
  }
};


// Функция обновления фильтра изображения через свойство style
const getImgFilter = () => {
  const {cssFunc, unit} = sliderParameters[currentEffectName];
  imgElement.style.filter = `${cssFunc}(${effectsLevelNumber}${unit})`;
  effectPhotoSliderContainer.classList.remove('hidden');

  if (currentEffectName === 'none') {
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

// Получаем значение от радиокнопок и обновляем фильтр изображения
const getTypeEffectsfromRadiobuttons = (evt) => {
  currentEffectName = evt.target.value;
  sliderUpdatePapremeters(currentEffectName);
  getImgFilter();
};

const initSlider = () => {
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
  effectPhotoSliderElement.noUiSlider.on('update', getLevelEffectfromSlider);
  effectsFieldset.addEventListener('change', getTypeEffectsfromRadiobuttons);
};

const resetFilters = () => {
  imgElement.style.filter = 'none';
  effectPhotoSliderContainer.classList.add('hidden');
};

export {initSlider, resetFilters};
