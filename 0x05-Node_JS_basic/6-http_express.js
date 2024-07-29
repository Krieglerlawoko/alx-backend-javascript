const express = require('express');

// Initialize the Express application
const app = express();
const PORT = 1245;

/**
 * Handles GET requests to the root URL.
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
const handleRootRequest = (req, res) => {
  res.status(200).send('Hello Holberton School!');
};

// Define routes
app.get('/', handleRootRequest);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
