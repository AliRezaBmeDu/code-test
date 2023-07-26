const { strLen, revStr } = require('./stringOp');

test('returns the length of a non-empty string', () => {
  expect(strLen('Findthefoo')).toBe(10);
});

test('throws an error if input is an empty string', () => {
  expect(() => strLen('')).toThrow('Input string length should be between 1 and 10 characters.');
});

test('throws an error if input string length is greater than 10 characters', () => {
  expect(() => strLen('This is too long.')).toThrow('Input string length should be between 1 and 10 characters.');
});

test('reverse a string', () => {
  expect(revStr('beximco')).toBe('ocmixeb');
});