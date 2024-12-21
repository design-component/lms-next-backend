import { Test, TestingModule } from '@nestjs/testing';
import { AdminManageParentController } from './admin-manage-parent.controller';
import { AdminManageParentService } from './admin-manage-parent.service';

describe('AdminManageParentController', () => {
  let controller: AdminManageParentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminManageParentController],
      providers: [AdminManageParentService],
    }).compile();

    controller = module.get<AdminManageParentController>(AdminManageParentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
