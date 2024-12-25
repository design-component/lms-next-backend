import { Module } from '@nestjs/common';
import { ParentInvitationService } from './parent-invitation.service';
import { ParentInvitationController } from './parent-invitation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ParentInvitation,
  ParentInvitationSchema,
} from './schemas/parent-invitation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ParentInvitation.name,
        schema: ParentInvitationSchema,
      },
    ]),
  ],
  controllers: [ParentInvitationController],
  providers: [ParentInvitationService],
})
export class ParentInvitationModule {}
