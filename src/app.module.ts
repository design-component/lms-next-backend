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
import configuration from 'config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/your-db'),
    UserAuthModule,
    DatabaseModule,
    ParentRegistrationModule,
    StudentRegistrationModule,
    AdminManageStudentModule,
    AdminManageParentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
