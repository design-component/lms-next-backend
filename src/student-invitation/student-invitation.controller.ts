import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentInvitationService } from './student-invitation.service';
import { CreateStudentInvitationDto } from './dto/create-student-invitation.dto';
import { UpdateStudentInvitationDto } from './dto/update-student-invitation.dto';
import { ResponseHelper } from 'src/helper/response.helper';

@Controller('student-invitation')
export class StudentInvitationController {
  constructor(
    private readonly studentInvitationService: StudentInvitationService,
  ) {}

  @Post()
  async create(@Body() createStudentInvitationDto: CreateStudentInvitationDto) {
    const response = await this.studentInvitationService.create({
      ...createStudentInvitationDto,
      status: 'pending',
    });
    return ResponseHelper.success(response);
  }

  @Get()
  findAll() {
    return this.studentInvitationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentInvitationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentInvitationDto: UpdateStudentInvitationDto,
  ) {
    return this.studentInvitationService.update(
      +id,
      updateStudentInvitationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentInvitationService.remove(+id);
  }
}
