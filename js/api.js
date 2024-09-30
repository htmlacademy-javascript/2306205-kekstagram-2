import {showAlert, createDataMessage} from './util.js';


const sendData = async (data, onSuccess) => {
  try {
    const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body: data
      });

    if (!response.ok) {
      throw new Error();
    }
    onSuccess();
    createDataMessage('success');
  } catch (err) {
    createDataMessage('error');
  }
};

const getData = async () => {
  try {
    const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');

    if (!response.ok) {
      throw new Error();
    }
    return await response.json();

  } catch (err) {
    showAlert('Не удалось загрузить данные с сервера. Попробуйте перезагрузить страницу');
    return [];
  }
};

export {getData, sendData};
