import { Test, TestingModule } from '@nestjs/testing';
import { ParentInvitationController } from './parent-invitation.controller';
import { ParentInvitationService } from './parent-invitation.service';

describe('ParentInvitationController', () => {
  let controller: ParentInvitationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentInvitationController],
      providers: [ParentInvitationService],
    }).compile();

    controller = module.get<ParentInvitationController>(ParentInvitationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
