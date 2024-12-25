import { Test, TestingModule } from '@nestjs/testing';
import { ParentInvitationService } from './parent-invitation.service';

describe('ParentInvitationService', () => {
  let service: ParentInvitationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParentInvitationService],
    }).compile();

    service = module.get<ParentInvitationService>(ParentInvitationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
