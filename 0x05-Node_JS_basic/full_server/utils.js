import fs from 'fs';

const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const result = {};
            const lines = data.split('\n').filter((line) => line.trim() !== '');
            lines.shift(); // Remove header row

            for (const line of lines) {
                const [firstname, , , field] = line.split(',');
                if (!result[field]) {
                    result[field] = [];
                }
                result[field].push(firstname);
            }

            resolve(result);
        });
    });
};

export default readDatabase;
