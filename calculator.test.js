const Calculator = require('./calculator');

describe('Calculator', () => {
  test('sum of two numbers', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('subtraction of two numbers', () => {
    expect(Calculator.subtract(5, 2)).toBe(3);
  });

  test('product of two numbers', () => {
    expect(Calculator.multiply(1, 2)).toBe(2);
  });

  test('division of two numbers', () => {
    expect(Calculator.divide(8, 2)).toBe(4);
  });

  test('throws error when dividing by zero', () => {
    expect(() => Calculator.divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
