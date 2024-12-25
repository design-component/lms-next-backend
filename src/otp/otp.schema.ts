import { Schema } from 'mongoose';

export const OtpSchema = new Schema({
  userId: { type: String, required: true },
  otpCode: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});
