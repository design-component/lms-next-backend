import { Injectable } from '@nestjs/common';
import { CreateStudentRegistrationDto } from './dto/create-student-registration.dto';
import { UpdateStudentRegistrationDto } from './dto/update-student-registration.dto';

@Injectable()
export class StudentRegistrationService {
  create(createStudentRegistrationDto: CreateStudentRegistrationDto) {
    return 'This action adds a new studentRegistration';
  }

  findAll() {
    return `This action returns all studentRegistration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentRegistration`;
  }

  update(id: number, updateStudentRegistrationDto: UpdateStudentRegistrationDto) {
    return `This action updates a #${id} studentRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentRegistration`;
  }
}
