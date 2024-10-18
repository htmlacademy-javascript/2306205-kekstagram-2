import {showAlert, createDataMessage} from './util.js';
import {sendData, getData} from './api.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const blockSubmitButton = (button) => {
  button.disabled = true;
  button.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = (button) => {
  button.disabled = false;
  button.textContent = SubmitButtonText.IDLE;
};


const uploadFormData = async (form, button, onSuccess) => {
  try {
    blockSubmitButton(button);
    await sendData(form);
    onSuccess();
    createDataMessage('success');
  } catch {
    createDataMessage('error');
  } finally {
    unblockSubmitButton(button);
  }
};

const getPhoto = async () => {
  try {
    return await getData();
  } catch (error) {
    showAlert('Не удалось загрузить данные. Попробуйте перезагрузить страницу');
    return [];
  }
};

export {uploadFormData, getPhoto};
