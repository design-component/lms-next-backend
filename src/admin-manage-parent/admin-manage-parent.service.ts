import { Injectable } from '@nestjs/common';
import { CreateAdminManageParentDto } from './dto/create-admin-manage-parent.dto';
import { UpdateAdminManageParentDto } from './dto/update-admin-manage-parent.dto';

@Injectable()
export class AdminManageParentService {
  create(createAdminManageParentDto: CreateAdminManageParentDto) {
    return 'This action adds a new adminManageParent';
  }

  findAll() {
    return `This action returns all adminManageParent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminManageParent`;
  }

  update(id: number, updateAdminManageParentDto: UpdateAdminManageParentDto) {
    return `This action updates a #${id} adminManageParent`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminManageParent`;
  }
}
