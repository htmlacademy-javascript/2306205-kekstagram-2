// Проверить палиндром
// const checkPalindrome = (palindrome) => {

//   const palindromeEd = palindrome
//     .replaceAll(' ', '')
//     .toLowerCase();

//   let palindromeReverse = '';

//   for (let i = palindromeEd.length - 1; i >= 0; i--) {
//     palindromeReverse += palindromeEd.at(i);
//   }

//   return palindromeReverse === palindromeEd ? 'Это палиндром' : 'Это не палиндром';
// };

// checkPalindrome('Лёша на полке клопа нашёл ');

// Извлечь цифры
const getNumbers = (anyString) => {

  anyString = String(anyString);
  let anyNumber = '';

  for (let i = 0; i < anyString.length; i++) {
    if (!Number.isNaN(parseInt(anyString.at(i), 10))) {
      anyNumber += parseInt(anyString.at(i), 10);
    }
  }
  return parseInt(anyNumber, 10);
};

getNumbers();

// Проверить длину строки
const checkStringLength = (str, length) => str.length <= length;
checkStringLength();


// Добавить несколько символов, чтобы получить строку нужной длины
const myPad = (sourse, minLength, addition) => {

  const targetLength = minLength - sourse.length;

  if (targetLength <= 0) {
    return sourse;
  }
  return addition.slice(0, targetLength % addition.length) + addition.repeat(targetLength / addition.length) + sourse;
};

myPad('kek', 4, '000');

// Добавить несколько символов, чтобы получить строку нужной длины. Второй вариант (попроще)

const myPadNew = (sourse, minLength, addition) => {
  let result = sourse;
  while (result.length <= minLength) {
    const newLength = result.length + addition.length;
    const actualAdd = newLength <= minLength ? addition : addition.slice(0, newLength - minLength);
    result = actualAdd + sourse;
  }
  return result;
};

myPadNew();


// function getTargetStroke () {
//   let targetStroke;

// for (i = 1; i < targetLength; i++) {
//     targetLength--;
//     targetStroke = addition[i] + sourse;
//   }

//   return targetStroke;
// };
