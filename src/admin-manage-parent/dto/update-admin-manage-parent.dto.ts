import { PartialType } from '@nestjs/swagger';
import { CreateAdminManageParentDto } from './create-admin-manage-parent.dto';

export class UpdateAdminManageParentDto extends PartialType(CreateAdminManageParentDto) {}
