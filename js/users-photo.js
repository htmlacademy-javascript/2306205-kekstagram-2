const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');

const initFileChooser = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((el) => fileName.endsWith(el));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

export {initFileChooser};
