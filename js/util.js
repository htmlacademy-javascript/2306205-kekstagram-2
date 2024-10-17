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

const createDataMessage = (id) => {
  const messageTemplate = document.getElementById(`${id}`).content.querySelector(`.${id}`);
  const messageContainer = messageTemplate.cloneNode(true);
  const closeButton = messageContainer.querySelector(`.${id}__button`);
  document.body.append(messageContainer);

  const handleKeypress = (evt) => {
    if (evt.key === 'Escape') {
      closeDataMessage();
      document.removeEventListener('keydown', handleKeypress);
    }
  };

  document.addEventListener('keydown', handleKeypress);
  closeButton.addEventListener('click', closeDataMessage);
  document.addEventListener('click', closeDataMessage);

  function closeDataMessage () {
    messageContainer.remove();
    closeButton.removeEventListener('click', closeDataMessage);
    document.removeEventListener('click', closeDataMessage);
  }
};

const showAlert = (message) => {
  const alertMessage = document.getElementById('error-load').content.querySelector('.error-load');
  alertMessage.textContent = `${message}`;
  document.body.append(alertMessage);

  setTimeout(() => {
    alertMessage.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {getRandomInteger, getRandomNonRepetitiveNumber, getRandonArrayElement, showAlert, createDataMessage, debounce};
