const ADDED_COMMENTS = 5;

const bodyPage = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');

const bigPictureContainerButton = bigPictureContainer.querySelector('#picture-cancel');
const bigPictureCountLikes = bigPictureContainer.querySelector('.social__comment-count');
const bigPictureButtonLoader = bigPictureContainer.querySelector('.comments-loader');
const bigPicture = bigPictureContainer.querySelector('.big-picture__img').querySelector('img');
const bigPictureCaption = bigPictureContainer.querySelector('.social__caption');
const bigPictureLikesAmount = bigPictureContainer.querySelector('.likes-count');
const bigPictureCommentsAmount = bigPictureContainer.querySelector('.comments-count');


const commentsContainer = bigPictureContainer.querySelector('.social__comments'); //ul
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

function openFullPhotoPopup () {
  bigPictureContainerButton.addEventListener('click', closePhotoPopup);
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureContainer.classList.remove('hidden');
  bodyPage.classList.add('modal-open');
}

function closePhotoPopup () {
  bigPictureContainer.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
  bigPictureContainerButton.removeEventListener('click', closePhotoPopup);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhotoPopup();
  }
}

function renderComment ({avatar, name, message}) {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('img').src = avatar;
  comment.querySelector('img').alt = name;
  comment.querySelector('p').textContent = message;

  return comment;
}

// const onButtonClickAddComments = (button, amount) => {
//   button.addEventListener('click', () => {
//     amount = 5;
//   });
// };


function showComments (arrayComments) {
  const fragment = document.createDocumentFragment();
  let amountComments = 0;
  amountComments += ADDED_COMMENTS;

  if (amountComments >= arrayComments.length) {
    amountComments = arrayComments.length;
    bigPictureCountLikes.classList.add('hidden');
    bigPictureButtonLoader.classList.add('hidden');
  } else {
    bigPictureCountLikes.classList.remove('hidden');
    bigPictureButtonLoader.classList.remove('hidden');
  }

  for (let i = 0; i < amountComments; i++) {
    const messageElement = renderComment(arrayComments[i]);
    fragment.append(messageElement);
  }

  commentsContainer.innerHTML = '';
  commentsContainer.append(fragment);
}

function renderFullPhotoPopup ({url, description, likes, comments}) {
  openFullPhotoPopup();
  bigPicture.src = url;
  bigPicture.alt = description;
  bigPictureLikesAmount.textContent = likes;
  bigPictureCaption.textContent = description;
  bigPictureCommentsAmount.textContent = comments.length;

  showComments(comments);
}

export {renderFullPhotoPopup};
