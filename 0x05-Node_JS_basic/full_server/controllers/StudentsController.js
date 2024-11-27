import readDatabase from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        const databasePath = process.argv[2]; // Get the database file path
        try {
            const data = await readDatabase(databasePath);
            let responseText = 'This is the list of our students\n';
            const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
            
            for (const field of fields) {
                responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
            }
            res.status(200).send(responseText.trim());
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const databasePath = process.argv[2]; // Get the database file path
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const data = await readDatabase(databasePath);
            if (data[major]) {
                res.status(200).send(`List: ${data[major].join(', ')}`);
            } else {
                res.status(200).send('List: ');
            }
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
