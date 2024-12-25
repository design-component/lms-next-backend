import { Test, TestingModule } from '@nestjs/testing';
import { StudentInvitationService } from './student-invitation.service';

describe('StudentInvitationService', () => {
  let service: StudentInvitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentInvitationService],
    }).compile();

    service = module.get<StudentInvitationService>(StudentInvitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
