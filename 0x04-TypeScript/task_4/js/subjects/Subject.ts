import { Teacher } from "./Teacher";

export class Subject {
  teacher: Teacher;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
