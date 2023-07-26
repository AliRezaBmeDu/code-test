// stringLength.test.js
const strLen = require('./strLen');

test('returns the length of a non-empty string', () => {
  expect(strLen('Hello, world!')).toBe(13);
});

