// 5-http.js
const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n').filter(line => line);
        const students = lines.slice(1).map(line => line.split(','));
        const csStudents = students.filter(student => student[3] === 'CS');
        const sweStudents = students.filter(student => student[3] === 'SWE');

        return {
            total: students.length,
            cs: {
                count: csStudents.length,
                names: csStudents.map(student => student[0])
            },
            swe: {
                count: sweStudents.length,
                names: sweStudents.map(student => student[0])
            }
        };
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        try {
            const data = await countStudents('database.csv');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write(`This is the list of our students\n`);
            res.write(`Number of students: ${data.total}\n`);
            res.write(`Number of students in CS: ${data.cs.count}. List: ${data.cs.names.join(', ')}\n`);
            res.write(`Number of students in SWE: ${data.swe.count}. List: ${data.swe.names.join(', ')}`);
            res.end();
        } catch (error) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Cannot load the database');
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
});

app.listen(1245);

module.exports = app;
