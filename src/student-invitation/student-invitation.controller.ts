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
    // check if already send invitation
    const checkPreSend =
      await this.studentInvitationService.findByStudentParentId(
        createStudentInvitationDto.studentId, // student
        createStudentInvitationDto.parentId, // parent
      );

    // check if conflict
    if (checkPreSend) {
      return ResponseHelper.error('Invitation already sent', 401, checkPreSend);
    }

    // create invitation
    const response = await this.studentInvitationService.create({
      ...createStudentInvitationDto,
      status: 'pending',
    });

    // send invitation
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
