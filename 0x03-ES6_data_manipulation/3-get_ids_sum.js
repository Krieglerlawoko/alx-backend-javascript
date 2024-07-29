function getStudentIdsSum(students) {
  // reduce function to sum all the student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
