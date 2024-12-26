import { Document, ObjectId } from 'mongoose';

export type StudentInvitationStatus = 'pending' | 'accepted' | 'rejected';

export interface IStudentInvitation extends Document {
  _id: ObjectId;
  parentId: ObjectId;
  studentId: ObjectId;
  status: StudentInvitationStatus;
  message: string;
}
