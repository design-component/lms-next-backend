import { Document, ObjectId } from 'mongoose';

export type ParentInvitationStatus = 'pending' | 'accepted' | 'rejected';

export interface IParentInvitation extends Document {
  _id: ObjectId;
  parentId: ObjectId;
  studentId: ObjectId;
  status: ParentInvitationStatus;
  message: string;
}
