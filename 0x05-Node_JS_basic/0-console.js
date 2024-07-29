/**
 * Logs a message to the console.
 * @param {string} message - The message to log.
 * @returns {void}
 */
const displayMessage = (message) => {
    if (typeof message !== 'string') {
        console.error('Invalid message type, expected a string.');
        return;
    }
    console.log(message);
};

/**
 * Exports the displayMessage function.
 * @module displayMessage
 */
module.exports = displayMessage;
