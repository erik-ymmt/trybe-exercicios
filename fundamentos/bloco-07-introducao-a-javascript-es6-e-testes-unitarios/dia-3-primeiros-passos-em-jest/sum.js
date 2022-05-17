const isValid = (num1, num2) => {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    throw new Error('please, only numbers.')
  }
}

const sum = (a, b) => {
    isValid(a, b);
    return a + b;
};

module.exports = { sum }
