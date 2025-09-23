/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Jim Brown', age: 21 },
  ];

  getAllStudents() {
    return this.students;
  }

  getSingleStudent(id: number) {
    const student = this.students.find((s) => s.id === id);

    if (!student) throw new NotFoundException('Student not found');

    return student;
  }

  // POST method to add a new student
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...data,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  // PUT method to update an existing student
  updateStudent(id: number, data: { name?: string; age?: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index < 0) throw new NotFoundException('Student not found');

    this.students[index] = { ...this.students[index], ...data };

    return this.students[index];
  }

  // PATCH method to partially update an existing student
  partiallyUpdateStudent(
    id: number,
    data: Partial<{ name: string; age: number }>,
  ) {
    const student = this.getSingleStudent(id);
    Object.assign(student, data);
    return student;
  }

  // DELETE method to remove a student
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index < 0) throw new NotFoundException('Student not found');
    const deletedStudent = this.students.splice(index, 1);
    return {
      message: 'Student deleted successfully',
      student: deletedStudent[0],
    };
  }
}
