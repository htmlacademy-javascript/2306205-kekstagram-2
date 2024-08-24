const SCALE_STEP = 25;
let scaleInit = 100;
const scalePhoto = {25: 0.25, 50: 0.5, 75: 0.75, 100: 1};

const scaleForm = document.querySelector('.img-upload__scale');
const buttonScaleSmaller = scaleForm.querySelector('.scale__control--smaller');
const buttonScaleBigger = scaleForm.querySelector('.scale__control--bigger');
const scaleControlInput = scaleForm.querySelector('.scale__control--value');

const imgUploadPreview = document.querySelector('.img-upload__preview img');

const decreaseScale = () => {
  if (scaleInit > 25) {
    const minusScale = scaleInit -= SCALE_STEP;
    scaleControlInput.value = `${minusScale}%`;
    imgUploadPreview.style.transform = `scale(${scalePhoto[minusScale]})`;
  }
};

const increaseScale = () => {
  if (scaleInit < 100) {
    const plusScale = scaleInit += SCALE_STEP;
    scaleControlInput.value = `${plusScale}%`;
    imgUploadPreview.style.transform = `scale(${scalePhoto[plusScale]})`;
  }
};

const changeScale = () => {
  buttonScaleBigger.addEventListener('click', increaseScale);
  buttonScaleSmaller.addEventListener('click', decreaseScale);
};

const resetScale = () => {
  imgUploadPreview.style.transform = null;
  scaleInit = 100;
  buttonScaleBigger.removeEventListener('click', increaseScale);
  buttonScaleSmaller.removeEventListener('click', decreaseScale);
};

export {changeScale, resetScale};
