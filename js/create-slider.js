const effectPhotoSliderElement = document.querySelector('.effect-level__slider');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const test = document.querySelector('.text__description');

noUiSlider.create(effectPhotoSliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
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


const effectsListMap = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
  none: 'none'
};

let effectsLevel;

const updateSlider = () => {
  effectsLevel = effectPhotoSliderElement.noUiSlider.get();
  test.value = effectsLevel;
};

effectPhotoSliderElement.noUiSlider.on('update', updateSlider);

effectsList.addEventListener('change', (evt) => {
  imgPreview.style.filter = `${effectsListMap[evt.target.value]}(${effectsLevel})`;
});
