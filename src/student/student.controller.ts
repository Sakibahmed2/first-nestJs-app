/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getSingleStudent(@Param('id') id: string) {
    return this.studentService.getSingleStudent(Number(id));
  }

  @Post()
  createStudent(@Body() data: { name: string; age: number }) {
    return this.studentService.createStudent(data);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() data: { name?: string; age?: number },
  ) {
    return this.studentService.updateStudent(Number(id), data);
  }

  @Patch(':id')
  partiallyUpdateStudent(
    @Param('id') id: string,
    @Body() data: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.partiallyUpdateStudent(Number(id), data);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
