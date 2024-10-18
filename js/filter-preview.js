import { getRandomInteger } from './util.js';
import { renderPreviews } from './create-preview.js';
import { debounce } from './util.js';

const TOTAL_RANDOM_PHOTOS = 10;
let _photos = [];

const removeOldRenderedPhotos = () => {
  const oldPhotos = document.querySelectorAll('.picture');
  for (const oldPhoto of oldPhotos) {
    oldPhoto.remove();
  }
};

const picturesFilter = document.querySelector('.img-filters');
const randomPhotoButton = picturesFilter.querySelector('#filter-random');
const popularPhotoButton = picturesFilter.querySelector('#filter-discussed');
const defaultPhotoButton = picturesFilter.querySelector('#filter-default');

const changeActiveButton = (evt) => {
  evt.preventDefault();
  const activeButton = picturesFilter.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const getPopularPhotoArray = () => {
  const filteredPopularPhotos = [..._photos];
  filteredPopularPhotos.sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);
  return filteredPopularPhotos;
};

const getRandomPhotoArray = () => {
  const filteredRandomPhotos = [];
  while (filteredRandomPhotos.length < TOTAL_RANDOM_PHOTOS) {
    const randomPhoto = _photos[getRandomInteger(0, _photos.length - 1)];
    if (filteredRandomPhotos.find((item) => item.id === randomPhoto.id) === undefined) {
      filteredRandomPhotos.push(randomPhoto);
    }
  }
  return filteredRandomPhotos;
};

const getDefaultPhotoArray = () => _photos;

const renderNewPreview = (getPhotoArray) => {
  removeOldRenderedPhotos();
  renderPreviews(getPhotoArray());
};

const photosFilter = (renderCallback) => (evt) => {
  changeActiveButton(evt);
  renderCallback();
};

const initPhotosFilters = (photos) => {
  _photos = photos;

  const debouncedDefaultRender = debounce(() => renderNewPreview(getDefaultPhotoArray));
  const debouncedRandomRender = debounce(() => renderNewPreview(getRandomPhotoArray));
  const debouncedPopularRender = debounce(() => renderNewPreview(getPopularPhotoArray));

  defaultPhotoButton.addEventListener('click', photosFilter(debouncedDefaultRender));
  randomPhotoButton.addEventListener('click', photosFilter(debouncedRandomRender));
  popularPhotoButton.addEventListener('click', photosFilter(debouncedPopularRender));
};

export {initPhotosFilters};
