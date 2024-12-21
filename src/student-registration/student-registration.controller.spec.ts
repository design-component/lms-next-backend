import { Test, TestingModule } from '@nestjs/testing';
import { StudentRegistrationController } from './student-registration.controller';
import { StudentRegistrationService } from './student-registration.service';

describe('StudentRegistrationController', () => {
  let controller: StudentRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentRegistrationController],
      providers: [StudentRegistrationService],
    }).compile();

    controller = module.get<StudentRegistrationController>(StudentRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
