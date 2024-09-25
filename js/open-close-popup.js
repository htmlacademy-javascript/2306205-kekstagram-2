const bodyPage = document.querySelector('body');

// Показать и спрятать попап
const showPopup = (element) => {
  element.classList.remove('hidden');
  bodyPage.classList.add('modal-open');
};

const hidePopup = (element) => {
  element.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
};

// Слушатель кнопки Эскейп на документ
const addDocumentEscapeListener = (func) => {
  document.addEventListener('keydown', func);
};

const removeDocumentEscapeListener = (func) => {
  document.removeEventListener('keydown', func);
};

const onDocumentKeydown = (func) => (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    func();
  }
};

// Слушатель на кнопку закрытия
const addCloseButtonListener = (el, func) => el.addEventListener('click', func);

const removeCloseButtonListener = (el, func) => el.removeEventListener('click', func);

// объединяем все в инит
const initPopup = (popupElement, closeButtonElement, onClose) => {
  const documentEscapeDownHandler = onDocumentKeydown(closePopup);

  function closePopup () {
    hidePopup(popupElement);
    onClose();
    removeDocumentEscapeListener(documentEscapeDownHandler);
    removeCloseButtonListener(closeButtonElement, closePopup);
  }

  const openPopup = () => {
    showPopup(popupElement);
    addDocumentEscapeListener(documentEscapeDownHandler);
    addCloseButtonListener(closeButtonElement, closePopup);
  };

  return {openPopup, closePopup};
};


export {initPopup};
