import { Module } from '@nestjs/common';
import { AdminManageStudentService } from './admin-manage-student.service';
import { AdminManageStudentController } from './admin-manage-student.controller';

@Module({
  controllers: [AdminManageStudentController],
  providers: [AdminManageStudentService],
})
export class AdminManageStudentModule {}
