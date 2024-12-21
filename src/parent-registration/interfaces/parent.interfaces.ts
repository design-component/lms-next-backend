import { Document } from 'mongoose';

export interface IParent extends Document {
  name: string;
  email: string;
  password: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
