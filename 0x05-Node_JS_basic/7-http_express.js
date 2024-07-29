// 7-http_express.js
const express = require('express');
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

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    try {
        const data = await countStudents('database.csv');
        let response = 'This is the list of our students\n';
        response += `Number of students: ${data.total}\n`;
        response += `Number of students in CS: ${data.cs.count}. List: ${data.cs.names.join(', ')}\n`;
        response += `Number of students in SWE: ${data.swe.count}. List: ${data.swe.names.join(', ')}`;
        res.send(response);
    } catch (error) {
        res.status(500).send('Cannot load the database');
    }
});

app.listen(1245);

module.exports = app;
