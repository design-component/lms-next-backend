import { PartialType } from '@nestjs/swagger';
import { CreateStudentInvitationDto } from './create-student-invitation.dto';

export class UpdateStudentInvitationDto extends PartialType(CreateStudentInvitationDto) {}
