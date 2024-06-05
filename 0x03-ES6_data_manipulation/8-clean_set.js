function cleanSet(set, startString) {
  // Initialize an empty array to store cleaned values
  const cleanedValues = [];

  // Iterate over each value in the set
  set.forEach(value => {
    // Check if the value starts with the startString
    if (value.startsWith(startString)) {
      // If it does, append the rest of the string to the cleanedValues array
      cleanedValues.push(value.slice(startString.length));
    }
  });

  // Join the cleaned values with '-'
  return cleanedValues.join('-');
}

export default cleanSet;
