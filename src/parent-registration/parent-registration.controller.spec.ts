import { Test, TestingModule } from '@nestjs/testing';
import { ParentRegistrationController } from './parent-registration.controller';
import { ParentRegistrationService } from './parent-registration.service';

describe('ParentRegistrationController', () => {
  let controller: ParentRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentRegistrationController],
      providers: [ParentRegistrationService],
    }).compile();

    controller = module.get<ParentRegistrationController>(ParentRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
