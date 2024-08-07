import {photosArray} from './create-data.js';
import {renderFullPhotoPopup} from './create-full-photo.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoList = photosArray();

photoList.forEach((photo) => {
  const previewPicture = pictureTemplate.cloneNode(true);
  const imgPicture = previewPicture.querySelector('.picture__img');
  imgPicture.src = photo.url;
  imgPicture.alt = photo.description;
  previewPicture.querySelector('.picture__comments').textContent = photo.comments.length;
  previewPicture.querySelector('.picture__likes').textContent = photo.likes;
  previewPicture.dataset.photoId = photo.photoId;

  pictureContainer.append(previewPicture);
});

const openPopup = (evt) => {
  const preview = evt.target.closest('[data-photo-id]');
  if (!preview) {
    return;
  }
  const targetPhoto = photoList.find((item) => item.photoId === +preview.dataset.photoId);
  renderFullPhotoPopup(targetPhoto);
};

pictureContainer.addEventListener('click', openPopup);

export {photoList, pictureContainer};


