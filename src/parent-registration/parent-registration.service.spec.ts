import { Test, TestingModule } from '@nestjs/testing';
import { ParentRegistrationService } from './parent-registration.service';

describe('ParentRegistrationService', () => {
  let service: ParentRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParentRegistrationService],
    }).compile();

    service = module.get<ParentRegistrationService>(ParentRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
