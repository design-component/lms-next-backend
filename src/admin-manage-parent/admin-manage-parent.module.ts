import { Module } from '@nestjs/common';
import { AdminManageParentService } from './admin-manage-parent.service';
import { AdminManageParentController } from './admin-manage-parent.controller';

@Module({
  controllers: [AdminManageParentController],
  providers: [AdminManageParentService],
})
export class AdminManageParentModule {}
