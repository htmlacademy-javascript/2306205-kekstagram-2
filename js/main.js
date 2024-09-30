import {renderPreviews, openFullPhotoOnClick} from './create-preview.js';
import {initUploadForm} from './upload-form.js';
import {initSlider} from './create-effects-slider.js';
import './upload-form-validator.js';
import './scale-control.js';
import {getData} from './api.js';


const loadedPhotos = await getData();
renderPreviews(loadedPhotos);
openFullPhotoOnClick(loadedPhotos);
initUploadForm();
initSlider();
