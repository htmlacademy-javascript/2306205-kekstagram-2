const bodyPage = document.querySelector('body');

const openPopup = (element) => {
  element.classList.remove('hidden');
  bodyPage.classList.add('modal-open');
};

function closePopup (element) {
  element.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
}

const onDocumentKeydown = (func) => (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    func();
  }
};

const addClosePopupListener = (el, func) => {
  el.addEventListener('click', func);
  document.addEventListener('keydown', onDocumentKeydown(func));
};

const removeClosePopupListener = (el, func) => {
  el.removeEventListener('click', func);
};

export {openPopup, closePopup, addClosePopupListener, removeClosePopupListener};
