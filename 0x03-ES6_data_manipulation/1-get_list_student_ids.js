function getListStudentIds(arrayOfObjects) {
  // Check if argument is array
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  
  // map function to extract ids from each object in the array
  return arrayOfObjects.map(student => student.id);
}

export default getListStudentIds;
