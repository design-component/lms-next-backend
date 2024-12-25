import { Injectable } from '@nestjs/common';
import { CreateParentInvitationDto } from './dto/create-parent-invitation.dto';
import { UpdateParentInvitationDto } from './dto/update-parent-invitation.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  ParentInvitation,
  ParentInvitationDocument,
} from './schemas/parent-invitation.schema';
import { Model } from 'mongoose';
import { IParentInvitation } from './interfaces/parent-invitation.interfaces';

@Injectable()
export class ParentInvitationService {
  constructor(
    @InjectModel(ParentInvitation.name)
    private ParentModel: Model<ParentInvitationDocument>,
  ) {}

  async create(
    createUserDto: CreateParentInvitationDto,
  ): Promise<IParentInvitation> {
    const response = new this.ParentModel(createUserDto);
    const save = await response.save();
    return save.toObject() as unknown as IParentInvitation;
  }

  findAll() {
    return `This action returns all parentInvitation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parentInvitation`;
  }

  update(id: number, updateParentInvitationDto: UpdateParentInvitationDto) {
    return `This action updates a #${id} parentInvitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} parentInvitation`;
  }
}