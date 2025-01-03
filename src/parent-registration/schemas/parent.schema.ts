import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ParentsDocument = HydratedDocument<Parent>;

@Schema({
  timestamps: true,
  toJSON: {
    transform: (_doc, ret) => {
      delete ret.password; // Remove password from the response
      return ret;
    },
  },
}) // Automatically adds `createdAt` and `updatedAt` fields
export class Parent {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'inactive', enum: ['active', 'inactive', 'deleted'] })
  status: string;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
