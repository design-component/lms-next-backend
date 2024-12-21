import { Module } from '@nestjs/common';
import { StudentRegistrationService } from './student-registration.service';
import { StudentRegistrationController } from './student-registration.controller';

@Module({
  controllers: [StudentRegistrationController],
  providers: [StudentRegistrationService],
})
export class StudentRegistrationModule {}
