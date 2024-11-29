
nst assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // Constants for test values
  const WHOLE_NUMBER_1 = 1.0;
  const WHOLE_NUMBER_2 = 2.0;
  const FRACTIONAL_NUMBER_1 = 2.4;
  const FRACTIONAL_NUMBER_2 = 2.5;
  const FRACTIONAL_NUMBER_3 = 2.6;
  const TRAILING_9 = 2.499999;
  const TRAILING_99 = 3.499999;

  it('should correctly calculate the sum of two floating point whole numbers', () => {
    assert.strictEqual(calculateNumber('SUM', WHOLE_NUMBER_1, WHOLE_NUMBER_2), 3);
  });

  it('should round down and sum when the second number is a floating point fractional number', () => {
    assert.strictEqual(calculateNumber('SUM', WHOLE_NUMBER_1, FRACTIONAL_NUMBER_1), 3);
  });

  it('should round down both numbers and sum when both are floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, FRACTIONAL_NUMBER_1), 3);
  });

  it('should round down the first number and sum when the second number is a whole number', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, WHOLE_NUMBER_2), 3);
  });

  it('should round up and sum when the second number is a floating point fractional number', () => {
    assert.strictEqual(calculateNumber('SUM', WHOLE_NUMBER_1, FRACTIONAL_NUMBER_2), 4);
  });

  it('should round up both numbers and sum when both are floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('SUM', FRACTIONAL_NUMBER_3, FRACTIONAL_NUMBER_2), 6);
  });

  it('should round up the first number and sum when the second number is a whole number', () => {
    assert.strictEqual(calculateNumber('SUM', FRACTIONAL_NUMBER_3, WHOLE_NUMBER_2), 5);
  });

  it('should handle floating point numbers with trailing 9\'s correctly', () => {
    assert.strictEqual(calculateNumber('SUM', TRAILING_9, TRAILING_99), 5);
  });

  it('should correctly calculate the difference between two floating point whole numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 2.0), 3);
  });

  it('should round down and subtract when the second number is a floating point fractional number', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.0, FRACTIONAL_NUMBER_1), 3);
  });

  it('should round down both numbers and subtract when both are floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.4, FRACTIONAL_NUMBER_1), 3);
  });

  it('should round down the first number and subtract when the second number is a whole number', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.4, WHOLE_NUMBER_2), 3);
  });

  it('should round up and subtract when the second number is a floating point fractional number', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.0, FRACTIONAL_NUMBER_2), 2);
  });

  it('should round up both numbers and subtract when both are floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.6, FRACTIONAL_NUMBER_2), 3);
  });

  it('should round up the first number and subtract when the second number is a whole number', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.6, WHOLE_NUMBER_2), 4);
  });

  it('should handle floating point numbers with trailing 9\'s correctly for subtraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', TRAILING_99, TRAILING_9), 3);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.0), 'Error');
  });

  it('should round down and divide when the divisor is a floating point fractional number', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, FRACTIONAL_NUMBER_1), 2);
  });

  it('should round down both numbers and divide when both are floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.4, FRACTIONAL_NUMBER_1), 2);
  });

  it('should round down the dividend and divide when the divisor is a whole number', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.4, WHOLE_NUMBER_2), 2);
  });

  it('should round up and divide when the divisor is a floating point fractional number', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, FRACTIONAL_NUMBER_2), 2);
  });

  it('should round up both numbers and divide when both are floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.6, FRACTIONAL_NUMBER_2), 2);
  });

  it('should round up the dividend and divide when the divisor is a whole number', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.6, WHOLE_NUMBER_2), 3);
  });

  it('should handle floating point numbers with trailing 9\'s correctly for division', () => {
    assert.strictEqual(calculateNumber('DIVIDE', TRAILING_99, TRAILING_9), 2);
  });
});
