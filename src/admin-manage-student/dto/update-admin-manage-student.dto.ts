import { PartialType } from '@nestjs/swagger';
import { CreateAdminManageStudentDto } from './create-admin-manage-student.dto';

export class UpdateAdminManageStudentDto extends PartialType(CreateAdminManageStudentDto) {}
