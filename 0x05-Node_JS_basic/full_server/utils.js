import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return reject(err);
    }

    const result = {};
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Skip the header row
    lines.shift();

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(firstname);
    });

    resolve(result);
  });
});

export default readDatabase;
