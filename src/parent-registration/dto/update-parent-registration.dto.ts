import { PartialType } from '@nestjs/swagger';
import { CreateParentRegistrationDto } from './create-parent-registration.dto';

// export class UpdateParentRegistrationDto extends PartialType(CreateParentRegistrationDto) {}

export class UpdateParentRegistrationDto extends PartialType(
  CreateParentRegistrationDto,
) {} // Makes all fields optional
