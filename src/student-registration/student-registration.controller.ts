import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentRegistrationService } from './student-registration.service';
import { CreateStudentRegistrationDto } from './dto/create-student-registration.dto';
import { UpdateStudentRegistrationDto } from './dto/update-student-registration.dto';

@Controller('student-registration')
export class StudentRegistrationController {
  constructor(private readonly studentRegistrationService: StudentRegistrationService) {}

  @Post()
  create(@Body() createStudentRegistrationDto: CreateStudentRegistrationDto) {
    return this.studentRegistrationService.create(createStudentRegistrationDto);
  }

  @Get()
  findAll() {
    return this.studentRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentRegistrationDto: UpdateStudentRegistrationDto) {
    return this.studentRegistrationService.update(+id, updateStudentRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentRegistrationService.remove(+id);
  }
}
