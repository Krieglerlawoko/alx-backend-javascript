/**
 * Prompts the user for their name and outputs the response.
 * @function
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const inputChunk = process.stdin.read();

  if (inputChunk) {
    process.stdout.write(`Your name is: ${inputChunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
