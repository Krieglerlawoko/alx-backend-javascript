// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8').trim();
        const lines = data.split('\n').filter(line => line);
        const students = lines.slice(1).map(line => line.split(','));
        const csStudents = students.filter(student => student[3] === 'CS');
        const sweStudents = students.filter(student => student[3] === 'SWE');

        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student[0]).join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student[0]).join(', ')}`);
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
