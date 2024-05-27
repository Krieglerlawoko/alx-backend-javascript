export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty string to store the concatenated employee names
  let result = '';

  // Iterate through the iterator object and concatenate employee names
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  // Remove the trailing ' | ' from the result string
  result = result.slice(0, -3);

  return result;
}
