import {renderPreviews, openFullPhotoOnClick} from './create-preview.js';
import {initUploadForm} from './upload-form.js';
import {initSlider} from './create-effects-slider.js';
import './upload-form-validator.js';
import './scale-control.js';
import {getPhoto} from './load-data.js';


const loadedPhotos = await getPhoto();
renderPreviews(loadedPhotos);
openFullPhotoOnClick(loadedPhotos);
initUploadForm();
initSlider();
