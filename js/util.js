const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomNonRepetitiveNumber = (min, max) => {
  const listNumbers = [];

  return () => {
    let getNumber = getRandomInteger(min, max);

    while (listNumbers.includes(getNumber)) {
      getNumber = getRandomInteger(min, max);
    }

    listNumbers.push(getNumber);
    return getNumber;
  };
};

const getRandonArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '24px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const createDataMessage = (id) => {
  const messageTemplate = document.getElementById(`${id}`).content.querySelector(`.${id}`);
  const messageContainer = messageTemplate.cloneNode(true);
  const closeButton = messageContainer.querySelector(`.${id}__button`);
  document.body.append(messageContainer);
  closeButton.addEventListener('click', closeDataMessage);

  function closeDataMessage () {
    messageContainer.remove();
    closeButton.removeEventListener('click', closeDataMessage);
  }
};

export {getRandomInteger, getRandomNonRepetitiveNumber, getRandonArrayElement, showAlert, createDataMessage};
