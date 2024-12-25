import { Test, TestingModule } from '@nestjs/testing';
import { StudentInvitationController } from './student-invitation.controller';
import { StudentInvitationService } from './student-invitation.service';

describe('StudentInvitationController', () => {
  let controller: StudentInvitationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentInvitationController],
      providers: [StudentInvitationService],
    }).compile();

    controller = module.get<StudentInvitationController>(StudentInvitationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
