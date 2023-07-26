const strLen = (str) => {
    if (str.length < 1 || str.length > 10) {
      throw new Error('Input string length should be between 1 and 10 characters.');
    }
  
    return str.length;
  };

const revStr = (str) => {
    return str.split('').reverse().join('');
}

const firstCap = (str) => {
  const result =  str[0].toUpperCase() + str.split('').splice(1).join('');
  return result
}
  
  module.exports = {
    strLen,
    revStr,
    firstCap
  };
  
