import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type StudentInvitationDocument = HydratedDocument<StudentInvitation>;

@Schema({
  timestamps: true,
})
export class StudentInvitation {
  @Prop({ required: true, ref: 'Parent', type: Types.ObjectId })
  readonly parentId: string[];

  @Prop({
    required: true,
    ref: 'Student',
    type: Types.ObjectId,
  })
  readonly studentId: string;

  @Prop({ required: false, maxLength: 256 })
  readonly message: string;

  @Prop({ default: 'pending', enum: ['accepted', 'pending', 'rejected'] })
  readonly status: string;
}

export const StudentInvitationSchema =
  SchemaFactory.createForClass(StudentInvitation);
