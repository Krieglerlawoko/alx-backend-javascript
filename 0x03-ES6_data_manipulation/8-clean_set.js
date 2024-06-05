function cleanSet(set, startString) {
  // Convert set to an array, filter values that start with startString,
  // then map to remove startString and join with '-'
  return [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}

export default cleanSet;
