import { Module } from '@nestjs/common';
import { StudentRegistrationService } from './student-registration.service';
import { StudentRegistrationController } from './student-registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schemas/student.schema';
import { JwtModule } from '@nestjs/jwt';
import { OtpModule } from 'src/otp/otp.module';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    JwtModule.register({
      secret: 'yourSecretKeyYourSecretKey',
      signOptions: { expiresIn: '30d' },
    }),
    OtpModule,
  ],
  controllers: [StudentRegistrationController],
  providers: [StudentRegistrationService, EmailService],
})
export class StudentRegistrationModule {}
