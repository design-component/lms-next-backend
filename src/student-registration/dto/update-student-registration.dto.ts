import { PartialType } from '@nestjs/swagger';
import { CreateStudentRegistrationDto } from './create-student-registration.dto';

export class UpdateStudentRegistrationDto extends PartialType(CreateStudentRegistrationDto) {}
