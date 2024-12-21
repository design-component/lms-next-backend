import { Injectable } from '@nestjs/common';
import { CreateAdminManageStudentDto } from './dto/create-admin-manage-student.dto';
import { UpdateAdminManageStudentDto } from './dto/update-admin-manage-student.dto';

@Injectable()
export class AdminManageStudentService {
  create(createAdminManageStudentDto: CreateAdminManageStudentDto) {
    return 'This action adds a new adminManageStudent';
  }

  findAll() {
    return `This action returns all adminManageStudent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminManageStudent`;
  }

  update(id: number, updateAdminManageStudentDto: UpdateAdminManageStudentDto) {
    return `This action updates a #${id} adminManageStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminManageStudent`;
  }
}
