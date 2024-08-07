import {getRandomInteger, getRandomNonRepetitiveNumber, getRandonArrayElement} from './util.js';

const AMOUNT_PHOTOS = 25;
const AMOUNT_COMMENTS = 15;

const PHOTOS_COMMENTS = [
  'Отлично!',
  'В целом всё неплохо. Но не всё...',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов, это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Что-то смущает, но мне нравится.',
  'Шикарная фотка.',
  'Где-то я уже видел это фото.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Ничего не понятно, но красиво.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_AUTHORS = [
  'Алексей', 'Анастасия', 'Андрей', 'Борис', 'Валентина', 'Виктор', 'Галина', 'Геннадий', 'Дмитрий', 'Елена', 'Евгений', 'Захар', 'Ирина', 'Константин', 'Лариса', 'Леонид', 'Михаил', 'Наталья', 'Николай', 'Ольга', 'Федор'
];

const PHOTOS_DESCRIPTIONS = [
  'Настоящий летний отдых',
  'Я и мои друзья на море',
  'Они перетягивают канат',
  'Босиком по траве',
  'Ужин на закате c вином',
  'Занимаемся спортом круглый год',
  'Погнали с горы на лыжах',
  'С днем рожднения, брат',
];

const createMessage = () => Array.from({length: getRandomInteger(1, 2)}, () => getRandonArrayElement(PHOTOS_COMMENTS)).join(' ');
const getRandomId = getRandomNonRepetitiveNumber(1, AMOUNT_PHOTOS);

const createPhoto = () => {
  const getIdPhoto = getRandomId();
  const getIdAvatar = () => getRandomInteger(1, 6);
  let photoComments = 0;
  const createComment = () => ({
    commentId: `${getIdPhoto}-${photoComments++}`,
    avatar: `img/avatar-${getIdAvatar()}.svg`,
    message: createMessage(),
    name: getRandonArrayElement(PHOTOS_AUTHORS)
  });

  return {
    photoId: getIdPhoto,
    url: `photos/${getIdPhoto}.jpg`,
    description: getRandonArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, AMOUNT_COMMENTS)}, createComment)
  };
};

const photosArray = () => Array.from({length: AMOUNT_PHOTOS}, createPhoto);

export {photosArray};
