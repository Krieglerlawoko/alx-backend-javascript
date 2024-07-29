const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

/**
 * Handles incoming requests and sends a response.
 * @param {http.IncomingMessage} req - The incoming request.
 * @param {http.ServerResponse} res - The outgoing response.
 */
const requestHandler = (req, res) => {
    const responseText = 'Hello Holberton School!';
    
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(responseText)
    });
    res.end(responseText);
};

// Create and start the server
const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
});

module.exports = server;
