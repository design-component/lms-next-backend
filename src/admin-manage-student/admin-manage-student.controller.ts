import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminManageStudentService } from './admin-manage-student.service';
import { CreateAdminManageStudentDto } from './dto/create-admin-manage-student.dto';
import { UpdateAdminManageStudentDto } from './dto/update-admin-manage-student.dto';

@Controller('admin-manage-student')
export class AdminManageStudentController {
  constructor(private readonly adminManageStudentService: AdminManageStudentService) {}

  @Post()
  create(@Body() createAdminManageStudentDto: CreateAdminManageStudentDto) {
    return this.adminManageStudentService.create(createAdminManageStudentDto);
  }

  @Get()
  findAll() {
    return this.adminManageStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminManageStudentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminManageStudentDto: UpdateAdminManageStudentDto) {
    return this.adminManageStudentService.update(+id, updateAdminManageStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminManageStudentService.remove(+id);
  }
}
