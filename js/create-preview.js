import {renderFullPhoto} from './create-full-photo.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPreviews = (photosArray) => {
  const fragment = document.createDocumentFragment();

  photosArray.forEach((photo) => {
    const previewPicture = pictureTemplate.cloneNode(true);
    const imgPicture = previewPicture.querySelector('.picture__img');
    imgPicture.src = photo.url;
    imgPicture.alt = photo.description;
    previewPicture.querySelector('.picture__comments').textContent = photo.comments.length;
    previewPicture.querySelector('.picture__likes').textContent = photo.likes;
    previewPicture.dataset.photoId = photo.id;
    fragment.appendChild(previewPicture);
  });
  pictureContainer.append(fragment);
};

const openFullPhotoOnClick = (photosArray) => {
  const handleOpenFullPhoto = (evt) => {
    const preview = evt.target.closest('[data-photo-id]');
    if (preview === undefined || preview === null) {
      return;
    }
    const targetPhoto = photosArray.find((item) => item.id === Number(preview.dataset.photoId));
    renderFullPhoto(targetPhoto);
  };
  pictureContainer.addEventListener('click', handleOpenFullPhoto);
};


export {renderPreviews, openFullPhotoOnClick};


