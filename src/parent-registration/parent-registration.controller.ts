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
} from './dto';
import { ParentRegistrationService } from './parent-registration.service';

@Controller('users')
export class ParentRegistrationController {
  constructor(
    private readonly ParentRegistrationService: ParentRegistrationService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateParentRegistrationDto) {
    return this.ParentRegistrationService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.ParentRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ParentRegistrationService.findOne(id);
  }

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
