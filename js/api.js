import {showAlert, createDataMessage} from './util.js';

const getData = async () => {
  let response;
  try {
    response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');
    if (!response.ok) {
      throw new Error();
    }
  } catch (err) {
    showAlert('Не удалось загрузить данные с сервера. Попробуйте перезагрузить страницу');
    return [];
  }

  const loadedPhotos = await response.json();
  return loadedPhotos;
};

const sendData = async (data) => {
  let response;
  try {
    response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body: data
      });

    if (!response.ok) {
      throw new Error();
    }
  } catch (err) {
    createDataMessage('error');
  }
};

export {getData, sendData};
