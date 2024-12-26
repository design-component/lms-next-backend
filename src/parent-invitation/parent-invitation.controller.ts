import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentInvitationService } from './parent-invitation.service';
import { CreateParentInvitationDto } from './dto/create-parent-invitation.dto';
import { UpdateParentInvitationDto } from './dto/update-parent-invitation.dto';
import { ResponseHelper } from 'src/helper/response.helper';

@Controller('parent-invitation')
export class ParentInvitationController {
  constructor(
    private readonly parentInvitationService: ParentInvitationService,
  ) {}

  @Post()
  async create(@Body() createParentInvitationDto: CreateParentInvitationDto) {
    // check if already send invitation
    const checkPreSend =
      await this.parentInvitationService.findByStudentParentId(
        createParentInvitationDto.studentId, // student
        createParentInvitationDto.parentId, // parent
      );

    // check if conflict
    if (checkPreSend) {
      return ResponseHelper.error('Invitation already sent', 401, checkPreSend);
    }

    // create invitation
    const response = await this.parentInvitationService.create(
      createParentInvitationDto,
    );

    // send invitation
    return ResponseHelper.success(response);
  }

  @Get()
  findAll() {
    return this.parentInvitationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentInvitationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParentInvitationDto: UpdateParentInvitationDto,
  ) {
    return this.parentInvitationService.update(+id, updateParentInvitationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentInvitationService.remove(+id);
  }
}
