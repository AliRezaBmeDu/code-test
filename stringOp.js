const strLen = (str) => {
    if (str.length < 1 || str.length > 10) {
      throw new Error('Input string length should be between 1 and 10 characters.');
    }
  
    return str.length;
  };

const revStr = (str) => {
    return str.split('').reverse().join('');
}
  
  module.exports = {
    strLen,
    revStr
  };
  
