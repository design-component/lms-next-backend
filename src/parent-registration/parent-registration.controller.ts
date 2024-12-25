import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateParentRegistrationDto,
  UpdateParentRegistrationDto,
  VerifyOtpParentDto,
} from './dto';
import { ParentRegistrationService } from './parent-registration.service';
import { ResponseHelper } from 'src/helper/response.helper';
import * as bcrypt from 'bcrypt';
import { env } from 'src/config';
import { JwtService } from '@nestjs/jwt';
import { OtpService } from 'src/otp/otp.service';
import { EmailService } from 'src/email/email.service';
import { StatusType } from 'src/type';
import { ObjectId } from 'mongoose';
@Controller('parent-registration')
export class ParentRegistrationController {
  constructor(
    private readonly ParentRegistrationService: ParentRegistrationService,
    private readonly jwtService: JwtService,
    private readonly otpService: OtpService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateParentRegistrationDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      env.hashSalt,
    );

    const data = await this.ParentRegistrationService.create({
      name: createUserDto.name,
      email: createUserDto.email,
      status: StatusType.INACTIVE,
      password: hashedPassword,
    });
    // Create the JWT payload
    const payload = { username: data.name, _id: data._id, role_type: 'parent' };
    const accessToken = this.jwtService.sign(payload);

    // Generate OTP
    const otp = await this.otpService.generateOtp(data._id);

    // Send OTP via email
    await this.emailService.sendOtp(data.email, otp);

    // Remove password from the response
    delete data.password;

    return ResponseHelper.success({ user: data, accessToken });
  }

  @Post('/verify-otp')
  async verifyOtp(@Body() otpData: VerifyOtpParentDto) {
    const isValid = await this.otpService.validateOtp(
      otpData.userId,
      otpData.otp,
    );
    if (isValid === 'OTP verified successfully') {
      await this.ParentRegistrationService.update(otpData.userId.toString(), {
        status: StatusType.ACTIVE,
      });
      return ResponseHelper.success('OTP verified successfully');
    }

    return ResponseHelper.error(isValid);
  }

  @Get()
  findAll() {
    return this.ParentRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ParentRegistrationService.findOne(id);
  }

  @Get('/find-by-email/:email')
  async findByEmail(@Param('email') email: string) {
    const data = await this.ParentRegistrationService.findsByEmail(email);
    console.log(data);
    return ResponseHelper.success(data);
  }

  @Post('/send-invitation')
  async sendInvitation(
    @Body() loginData: { email: string; password: string },
  ) {}

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateParentRegistrationDto,
  ) {
    return this.ParentRegistrationService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ParentRegistrationService.delete(id);
  }
}
