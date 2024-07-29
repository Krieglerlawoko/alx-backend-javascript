import fs from 'fs/promises';

export async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.split('\n').slice(1);
        const students = {};

        for (const line of lines) {
            if (line.trim()) {
                const [firstName, , , field] = line.split(',');
                if (!students[field]) {
                    students[field] = [];
                }
                students[field].push(firstName);
            }
        }

        return students;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}
