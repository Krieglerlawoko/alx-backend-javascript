const fs = require('fs');

/**
 * Counts and logs the number of students in each field from the provided data file.
 * @param {string} dataPath - The path to the data file.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
const countStudents = (dataPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) {
                return reject(new Error('Cannot load the database'));
            }

            if (data) {
                const fileLines = data.trim().split('\n');
                const studentGroups = {};
                const dbFieldNames = fileLines[0].split(',');
                const studentPropNames = dbFieldNames.slice(0, -1);

                fileLines.slice(1).forEach((line) => {
                    const studentRecord = line.split(',');
                    const studentData = studentPropNames.reduce((acc, propName, idx) => {
                        acc[propName] = studentRecord[idx];
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

                resolve();
            } else {
                reject(new Error('The database is empty or invalid'));
            }
        });
    });
};

module.exports = countStudents;
