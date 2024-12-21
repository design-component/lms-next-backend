import { Test, TestingModule } from '@nestjs/testing';
import { AdminManageParentService } from './admin-manage-parent.service';

describe('AdminManageParentService', () => {
  let service: AdminManageParentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminManageParentService],
    }).compile();

    service = module.get<AdminManageParentService>(AdminManageParentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
