const http = require('http');

// Define constants for the server configuration
const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

// Create the HTTP server
app.on('request', (_, res) => {
  const responseMessage = 'Hello Holberton School!';

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMessage.length);
  // Set response status code
  res.statusCode = 200;
  res.write(Buffer.from(responseMessage));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
