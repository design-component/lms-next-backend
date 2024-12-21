import { Test, TestingModule } from '@nestjs/testing';
import { AdminManageStudentService } from './admin-manage-student.service';

describe('AdminManageStudentService', () => {
  let service: AdminManageStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminManageStudentService],
    }).compile();

    service = module.get<AdminManageStudentService>(AdminManageStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
