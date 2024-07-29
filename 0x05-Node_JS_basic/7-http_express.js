const express = require('express');
const fs = require('fs').promises; // Use promises-based fs for cleaner async code

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2] || '';

// Function to count students from a CSV file
/**
 * Reads a CSV file and counts students by their fields.
 * @param {string} dataPath - Path to the CSV file.
 * @returns {Promise<string>} - A promise that resolves with a report of students.
 */
const countStudents = async (dataPath) => {
    if (!dataPath) {
        throw new Error('Cannot load the database');
    }

    try {
        const data = await fs.readFile(dataPath, 'utf-8');
        const fileLines = data.trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, -1);

        fileLines.slice(1).forEach((line) => {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord.slice(0, -1);
            const field = studentRecord[studentRecord.length - 1];

            if (!studentGroups[field]) {
                studentGroups[field] = [];
            }

            const studentEntries = studentPropNames.map((propName, idx) => [
                propName,
                studentPropValues[idx],
            ]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
        });

        const totalStudents = Object.values(studentGroups).reduce(
            (total, group) => total + group.length,
            0
        );

        const reportParts = [`Number of students: ${totalStudents}`];
        Object.entries(studentGroups).forEach(([field, group]) => {
            const studentNames = group.map((student) => student.firstname).join(', ');
            reportParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        });

        return reportParts.join('\n');
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};

// Route handlers
app.get('/', (req, res) => {
    res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    const responseParts = ['This is the list of our students'];

    try {
        const report = await countStudents(DB_FILE);
        responseParts.push(report);
        const responseText = responseParts.join('\n');
        res.status(200).send(responseText);
    } catch (err) {
        responseParts.push(err.message || err.toString());
        const responseText = responseParts.join('\n');
        res.status(500).send(responseText); // Send 500 status code for server errors
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
