const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts and logs the number of students in each field from the provided data file.
 * @param {string} dataPath - The path to the data file.
 * @returns {Promise<string>} - A promise that resolves with the report of students.
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    if (!dataPath) {
      return reject(new Error('Cannot load the database'));
    }

    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const fileLines = data.trim().split('\n');
      const dbFieldNames = fileLines[0].split(',');
      const studentGroups = {};

      fileLines.slice(1).forEach(line => {
        const studentRecord = line.split(',');
        const field = studentRecord.pop();
        const studentData = dbFieldNames.slice(0, -1).reduce((acc, propName, idx) => {
          acc[propName] = studentRecord[idx];
          return acc;
        }, {});

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(studentData);
      });

      const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
      const reportParts = [`Number of students: ${totalStudents}`];

      Object.entries(studentGroups).forEach(([field, group]) => {
        const studentNames = group.map(student => student.firstname).join(', ');
        reportParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      });

      resolve(reportParts.join('\n'));
    });
  });
};

/**
 * Handles incoming requests and sends responses.
 * @param {http.IncomingMessage} req - The incoming request.
 * @param {http.ServerResponse} res - The outgoing response.
 */
const requestHandler = (req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': Buffer.byteLength(responseText) });
    res.end(responseText);
  } else if (req.url === '/students') {
    const responseParts = ['This is the list of our students'];
    countStudents(DB_FILE)
      .then(report => {
        responseParts.push(report);
        const responseText = responseParts.join('\n');
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': Buffer.byteLength(responseText) });
        res.end(responseText);
      })
      .catch(err => {
        responseParts.push(err.message);
        const responseText = responseParts.join('\n');
        res.writeHead(500, { 'Content-Type': 'text/plain', 'Content-Length': Buffer.byteLength(responseText) });
        res.end(responseText);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

// Create and start the server
const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});

module.exports = server;
