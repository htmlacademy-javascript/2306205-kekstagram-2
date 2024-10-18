const SCALE_STEP = 25;
let currentScale = 100;
const scaleValueMap = {25: 0.25, 50: 0.5, 75: 0.75, 100: 1};

const scaleForm = document.querySelector('.img-upload__scale');
const buttonScaleSmaller = scaleForm.querySelector('.scale__control--smaller');
const buttonScaleBigger = scaleForm.querySelector('.scale__control--bigger');
const scaleControlInput = scaleForm.querySelector('.scale__control--value');

const imgUploadPreview = document.querySelector('.img-upload__preview img');

const decreaseScale = () => {
  if (currentScale > 25) {
    currentScale -= SCALE_STEP;
    scaleControlInput.value = `${currentScale}%`;
    imgUploadPreview.style.transform = `scale(${scaleValueMap[currentScale]})`;
  }
};

const increaseScale = () => {
  if (currentScale < 100) {
    currentScale += SCALE_STEP;
    scaleControlInput.value = `${currentScale}%`;
    imgUploadPreview.style.transform = `scale(${scaleValueMap[currentScale]})`;
  }
};

const addScaleChangeListeners = () => {
  buttonScaleBigger.addEventListener('click', increaseScale);
  buttonScaleSmaller.addEventListener('click', decreaseScale);
};

const resetScaleChanges = () => {
  imgUploadPreview.style.transform = 'none';
  currentScale = 100;
};

export {addScaleChangeListeners, resetScaleChanges};
