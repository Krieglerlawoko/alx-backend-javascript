/**
 * Performs a mathematical operation based on the given type.
 * @param {string} operation - The type of operation to perform ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number|string} - The result of the operation or an error message.
 */
const calculateNumber = (operation, a, b) => {
  // Validate inputs
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
  // Round the operands
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
  // Round the operands
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
