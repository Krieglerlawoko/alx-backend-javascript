const fs = require('fs');

/**
 * Counts and logs the number of students in each field from the provided data file.
 * @param {string} dataPath - The path to the data file.
 * @throws Will throw an error if the file does not exist or is not a valid file.
 */
const countStudents = (dataPath) => {
    try {
        if (!fs.existsSync(dataPath)) {
            throw new Error('Cannot load the database');
        }
        if (!fs.statSync(dataPath).isFile()) {
            throw new Error('Cannot load the database');
        }

        const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
        if (!fileContent) {
            throw new Error('The database is empty');
        }

        const fileLines = fileContent.split('\n');
        const dbFieldNames = fileLines[0].split(',');
        const studentGroups = {};

        fileLines.slice(1).forEach((line) => {
            const studentRecord = line.split(',');
            const studentData = dbFieldNames.slice(0, -1).reduce((acc, fieldName, index) => {
                acc[fieldName] = studentRecord[index];
                return acc;
            }, {});
            const field = studentRecord[studentRecord.length - 1];

            if (!studentGroups[field]) {
                studentGroups[field] = [];
            }
            studentGroups[field].push(studentData);
        });

        const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
        console.log(`Number of students: ${totalStudents}`);

        Object.entries(studentGroups).forEach(([field, group]) => {
            const studentNames = group.map(student => student.firstname).join(', ');
            console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        });
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = countStudents;
