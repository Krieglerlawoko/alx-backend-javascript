function getStudentsByLocation(students, city) {
  // filter function to return only the students located in the specified city
  return students.filter(student => student.location === city);
}

export default getStudentsByLocation;
