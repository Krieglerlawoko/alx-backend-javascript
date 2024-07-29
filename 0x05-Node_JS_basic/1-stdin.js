// Import the 'process' module
const { stdout, stdin } = require('process');

// Prompt the user for their name
stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle user input
stdin.on('data', (data) => {
    const name = data.toString().trim(); // Convert the input to a string and trim whitespace
    stdout.write(`Your name is: ${name}\n`);
});

// Handle the end of input stream
stdin.on('end', () => {
    stdout.write('This important software is now closing\n');
});

// Handle possible errors
stdin.on('error', (err) => {
    console.error('An error occurred:', err);
});
