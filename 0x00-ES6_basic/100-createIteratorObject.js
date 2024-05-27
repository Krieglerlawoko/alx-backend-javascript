export default function createIteratorObject(report) {
  // Define a generator function to yield each employee
  function* employeeIterator() {
    for (const department in report.allEmployees) {
      const employees = report.allEmployees[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  // Return an object with a Symbol.iterator property that references the generator function
  return {
    [Symbol.iterator]: employeeIterator
  };
}
