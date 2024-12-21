import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminManageParentService } from './admin-manage-parent.service';
import { CreateAdminManageParentDto } from './dto/create-admin-manage-parent.dto';
import { UpdateAdminManageParentDto } from './dto/update-admin-manage-parent.dto';

@Controller('admin-manage-parent')
export class AdminManageParentController {
  constructor(private readonly adminManageParentService: AdminManageParentService) {}

  @Post()
  create(@Body() createAdminManageParentDto: CreateAdminManageParentDto) {
    return this.adminManageParentService.create(createAdminManageParentDto);
  }

  @Get()
  findAll() {
    return this.adminManageParentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminManageParentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminManageParentDto: UpdateAdminManageParentDto) {
    return this.adminManageParentService.update(+id, updateAdminManageParentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminManageParentService.remove(+id);
  }
}
