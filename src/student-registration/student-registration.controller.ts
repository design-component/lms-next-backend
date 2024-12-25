import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentRegistrationService } from './student-registration.service';
import { CreateStudentRegistrationDto } from './dto/create-student-registration.dto';
import { UpdateStudentRegistrationDto } from './dto/update-student-registration.dto';
import { JwtService } from '@nestjs/jwt';
import { OtpService } from 'src/otp/otp.service';
import { EmailService } from 'src/email/email.service';
import * as bcrypt from 'bcrypt';
import { env } from 'src/config';
import { RoleType, StatusType } from 'src/type';
import { ResponseHelper } from 'src/helper/response.helper';

@Controller('student-registration')
export class StudentRegistrationController {
  constructor(
    private readonly studentRegistrationService: StudentRegistrationService,
    private readonly jwtService: JwtService,
    private readonly otpService: OtpService,
    private readonly emailService: EmailService,
  ) {}

  @Post()
  async create(
    @Body() createStudentRegistrationDto: CreateStudentRegistrationDto,
  ) {
    const hashedPassword = await bcrypt.hash(
      createStudentRegistrationDto.password,
      env.hashSalt,
    );
    const data = await this.studentRegistrationService.create({
      name: createStudentRegistrationDto.name,
      email: createStudentRegistrationDto.email,
      status: StatusType.INACTIVE,
      password: hashedPassword,
      institute: createStudentRegistrationDto.institute,
    });
    // Create the JWT payload
    const payload = {
      username: data.name,
      _id: data._id,
      role_type: RoleType.STUDENT,
    };
    const accessToken = this.jwtService.sign(payload);

    // Generate OTP
    const otp = await this.otpService.generateOtp(data._id);

    // Send OTP via email
    await this.emailService.sendOtp(data.email, otp);

    // Remove password from the response
    delete data.password;

    return ResponseHelper.success({ user: data, accessToken });
  }

  @Get()
  findAll() {
    return this.studentRegistrationService.findAll();
  }

  @Post('/send-invitation')
  async sendInvitation(
    @Body() invitation: { studentId: string; parentId: string[] },
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentRegistrationDto: UpdateStudentRegistrationDto,
  ) {
    return this.studentRegistrationService.update(
      +id,
      updateStudentRegistrationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentRegistrationService.remove(+id);
  }
}
