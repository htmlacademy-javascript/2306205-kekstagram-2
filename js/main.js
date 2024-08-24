import {createPhotoArray} from './create-data.js';
import {renderPreviews, openFullPhotoOnClick} from './create-preview.js';
import './upload-form.js';
import './upload-form-validator.js';
import './scale-control.js';


const photos = createPhotoArray();
renderPreviews(photos);
openFullPhotoOnClick(photos);
