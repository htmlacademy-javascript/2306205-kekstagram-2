import {createPhotoArray} from './create-data.js';
import {renderPreviews, openFullPhotoOnClick} from './create-preview.js';

const photos = createPhotoArray();
renderPreviews(photos);
openFullPhotoOnClick(photos);
