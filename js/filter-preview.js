import { getRandomInteger } from './util.js';
import { renderPreviews } from './create-preview.js';
import { debounce, throttle } from './util.js';

const TOTAL_RANDOM_PHOTOS = 10;
const DELAY = 500;
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


const photosFilter = (getPhotoArray) => (evt) => {
  changeActiveButton(evt);

  const renderNewPreview = () => {
    removeOldRenderedPhotos();
    renderPreviews(getPhotoArray());
  };

  const debouncedRender = debounce(renderNewPreview);
  debouncedRender();
};

const initPhotosFilters = (photos) => {
  _photos = photos;
  defaultPhotoButton.addEventListener('click', photosFilter(getDefaultPhotoArray));
  randomPhotoButton.addEventListener('click', throttle(photosFilter(getRandomPhotoArray), DELAY));
  popularPhotoButton.addEventListener('click', photosFilter(getPopularPhotoArray));
};

export {initPhotosFilters};
