import {getRandomInteger} from './util.js';
import {renderPreviews} from './create-preview.js';

const TOTAL_RANDOM_PHOTOS = 10;

const picturesFilter = document.querySelector('.img-filters');
const randomPhotoButton = picturesFilter.querySelector('#filter-random');
const popularPhotoButton = picturesFilter.querySelector('#filter-discussed');
// const defaultPhotoButton = picturesFilter.querySelector('#filter-default');

const changeActiveButton = (evt) => {
  evt.preventDefault();
  const activeButton = picturesFilter.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const popularPhotoArray = (photos) => {
  const filteredPopularPhotos = photos.slice();
  filteredPopularPhotos.sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);
  return filteredPopularPhotos;
};

const randomPhotoArray = (photos) => {
  const filteredRandomPhotos = [];
  while (filteredRandomPhotos.length < TOTAL_RANDOM_PHOTOS) {
    const randomPhoto = photos[getRandomInteger(0, photos.length)];
    if (!filteredRandomPhotos.includes(randomPhoto)) {
      filteredRandomPhotos.push(randomPhoto);
    }
  }
  return filteredRandomPhotos;
};

const randomPhotoFilter = (evt) => {
  changeActiveButton(evt);
  const testArray = randomPhotoArray();
  renderPreviews(testArray());
};

const popularPhotoFilter = (evt) => {
  changeActiveButton(evt);
  const testArray = popularPhotoArray();
  renderPreviews(testArray);
};

// defaultPhotoButton.addEventListener('click', photos);
randomPhotoButton.addEventListener('click', randomPhotoFilter);
popularPhotoButton.addEventListener('click', popularPhotoFilter);

