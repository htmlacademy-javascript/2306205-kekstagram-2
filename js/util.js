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

export {getRandomInteger, getRandomNonRepetitiveNumber, getRandonArrayElement};
