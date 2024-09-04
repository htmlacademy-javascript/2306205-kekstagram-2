import {createPhotoArray} from './create-data.js';
import {renderPreviews, openFullPhotoOnClick} from './create-preview.js';
import {initUploadForm} from './upload-form.js';
import './upload-form-validator.js';
import './scale-control.js';
import './create-slider.js';

const photos = createPhotoArray();
renderPreviews(photos);
openFullPhotoOnClick(photos);
initUploadForm();
