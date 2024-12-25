import { Module } from '@nestjs/common';
import { ParentRegistrationService } from './parent-registration.service';
import { ParentRegistrationController } from './parent-registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from './schemas/parent.schema';
import { JwtModule } from '@nestjs/jwt';
import { OtpModule } from 'src/otp/otp.module';
import { EmailService } from 'src/email/email.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Parent.name, schema: ParentSchema }]),
    JwtModule.register({
      secret: 'yourSecretKeyYourSecretKey',
      signOptions: { expiresIn: '30d' },
    }),
    OtpModule,
  ],
  controllers: [ParentRegistrationController],
  providers: [ParentRegistrationService, EmailService],
})
export class ParentRegistrationModule {}
