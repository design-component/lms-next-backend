import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import * as crypto from 'crypto';

@Injectable()
export class OtpService {
  constructor(@InjectModel('Otp') private readonly otpModel: Model<any>) {}

  async generateOtp(userId: ObjectId): Promise<string> {
    const otp = crypto.randomInt(100000, 999999).toString(); // Generate 6-digit OTP

    // Save OTP with expiration (10 minutes)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await new this.otpModel({ userId, otpCode: otp, expiresAt }).save();

    return otp;
  }

  async validateOtp(userId: string, otpCode: string): Promise<string> {
    const otp = await this.otpModel.findOne({ userId, otpCode });

    if (!otp) {
      return 'Invalid OTP'; // Invalid or expired
    }
    if (otp.expiresAt < new Date()) {
      return 'OTP expired'; // Invalid or expired
    }

    // Remove OTP after validation
    await this.otpModel.deleteOne({ _id: otp._id });
    return 'OTP verified successfully';
  }
}
