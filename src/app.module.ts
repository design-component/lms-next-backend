import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserAuthModule } from './user-auth/user-auth.module';
import { DatabaseModule } from './database/database.module';
import { ParentRegistrationModule } from './parent-registration/parent-registration.module';
import { StudentRegistrationModule } from './student-registration/student-registration.module';
import { AdminManageStudentModule } from './admin-manage-student/admin-manage-student.module';
import { AdminManageParentModule } from './admin-manage-parent/admin-manage-parent.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtGlobalModule } from './helper/jwt.strategy';
import { OtpModule } from './otp/otp.module';
import { ParentInvitationModule } from './parent-invitation/parent-invitation.module';
import { StudentInvitationModule } from './student-invitation/student-invitation.module';

@Module({
  imports: [
    JwtGlobalModule,
    JwtModule.register({
      secret: 'yourSecretKeyYourSecretKey',
      signOptions: { expiresIn: '30d' },
    }),
    PassportModule,
    MongooseModule.forRoot('mongodb://localhost:27017/your-db'),
    UserAuthModule,
    DatabaseModule,
    ParentRegistrationModule,
    StudentRegistrationModule,
    AdminManageStudentModule,
    AdminManageParentModule,
    OtpModule,
    ParentInvitationModule,
    StudentInvitationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
