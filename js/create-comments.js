const STEP = 5;
let currentCount;
let allComments = [];

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCountComments = bigPictureContainer.querySelector('.social__comment-count');
const bigPictureAmountComments = bigPictureCountComments.querySelector('.comments-showed');
const bigPictureButtonLoader = bigPictureContainer.querySelector('.comments-loader');
const bigPictureCommentsAmount = bigPictureContainer.querySelector('.comments-count');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsContainer = bigPictureContainer.querySelector('.social__comments'); //ul

const createComment = ({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('img').src = avatar;
  comment.querySelector('img').alt = name;
  comment.querySelector('p').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const messageElement = createComment(comment);
    fragment.append(messageElement);
  });

  commentsContainer.append(fragment);
};

const showCommentsCount = () => {
  bigPictureAmountComments.textContent = `${commentsContainer.children.length}`;
  bigPictureCommentsAmount.textContent = allComments.length;
};

const showCommentsButton = () => {
  if (commentsContainer.children.length >= allComments.length) {
    bigPictureButtonLoader.classList.add('hidden');
  } else {
    bigPictureButtonLoader.classList.remove('hidden');
  }
};

const showComments = (items) => {
  renderComments(items.slice(currentCount, currentCount + STEP));
  showCommentsButton();
  showCommentsCount();
};

const addComments = () => {
  currentCount += STEP;
  showComments(allComments);
};

const addCommentsListener = () => {
  bigPictureButtonLoader.addEventListener('click', addComments);
};

const removeCommentsListener = () => {
  bigPictureButtonLoader.removeEventListener('click', addComments);
};

const initComments = (data) => {
  allComments = data;
  currentCount = 0;
  commentsContainer.innerHTML = '';
  showComments(allComments);
  addCommentsListener();
};



export {initComments, removeCommentsListener};
