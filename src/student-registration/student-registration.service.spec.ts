import { Test, TestingModule } from '@nestjs/testing';
import { StudentRegistrationService } from './student-registration.service';

describe('StudentRegistrationService', () => {
  let service: StudentRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentRegistrationService],
    }).compile();

    service = module.get<StudentRegistrationService>(StudentRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
