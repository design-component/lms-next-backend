import { Document, ObjectId } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  email: string;
  password: string;
  status: string;
  institute: string;
  createdAt: Date;
  updatedAt: Date;
  _id: ObjectId;
}
