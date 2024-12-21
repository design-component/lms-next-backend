import { Test, TestingModule } from '@nestjs/testing';
import { AdminManageStudentController } from './admin-manage-student.controller';
import { AdminManageStudentService } from './admin-manage-student.service';

describe('AdminManageStudentController', () => {
  let controller: AdminManageStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminManageStudentController],
      providers: [AdminManageStudentService],
    }).compile();

    controller = module.get<AdminManageStudentController>(AdminManageStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
