import { Cpp, Java, React, Teacher } from "./subjects";

const cppSubject = new Cpp();
const javaSubject = new Java();
const reactSubject = new React();

const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

console.log("C++");
cppSubject.setTeacher(cTeacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log("Java");
javaSubject.setTeacher(cTeacher);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log("React");
reactSubject.setTeacher(cTeacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
