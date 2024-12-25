import { Module } from '@nestjs/common';
import { StudentInvitationService } from './student-invitation.service';
import { StudentInvitationController } from './student-invitation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentInvitationSchema,
  StudentInvitation,
} from './schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: StudentInvitation.name,
        schema: StudentInvitationSchema,
      },
    ]),
  ],
  controllers: [StudentInvitationController],
  providers: [StudentInvitationService],
})
export class StudentInvitationModule {}
