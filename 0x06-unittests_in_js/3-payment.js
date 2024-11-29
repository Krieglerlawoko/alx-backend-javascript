const Utils = require('./utils');

/**
 * Sends a payment request to an API and logs the total cost.
 * @param {number} amount - The amount to be summed.
 * @param {number} shipping - The shipping cost to be added to the total amount.
 */
const sendPaymentRequestToApi = (amount, shipping) => {
  const totalCost = Utils.calculateNumber('SUM', amount, Shipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
