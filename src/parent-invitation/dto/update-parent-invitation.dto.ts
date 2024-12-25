import { PartialType } from '@nestjs/swagger';
import { CreateParentInvitationDto } from './create-parent-invitation.dto';

export class UpdateParentInvitationDto extends PartialType(CreateParentInvitationDto) {}
