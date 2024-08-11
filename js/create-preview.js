import {renderFullPhotoPopup} from './create-full-photo.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPreview = (photosArray) => {
  photosArray.forEach((photo) => {
    const previewPicture = pictureTemplate.cloneNode(true);
    const imgPicture = previewPicture.querySelector('.picture__img');
    imgPicture.src = photo.url;
    imgPicture.alt = photo.description;
    previewPicture.querySelector('.picture__comments').textContent = photo.comments.length;
    previewPicture.querySelector('.picture__likes').textContent = photo.likes;
    previewPicture.dataset.photoId = photo.photoId;

    pictureContainer.append(previewPicture);
  });

  const onPreviewClick = (evt) => {
    const preview = evt.target.closest('[data-photo-id]');
    if (preview === undefined) {
      return;
    }
    const targetPhoto = photosArray.find((item) => item.photoId === Number(preview.dataset.photoId));
    renderFullPhotoPopup(targetPhoto);
  };

  pictureContainer.addEventListener('click', onPreviewClick);
};


export {renderPreview};


