import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

import {
  CreateParentRegistrationDto,
  UpdateParentRegistrationDto,
} from './dto';
import { Parent, ParentsDocument } from './schemas/parent.schema';

@Injectable()
export class ParentRegistrationService {
  constructor(
    @InjectModel(Parent.name) private ParentModel: Model<ParentsDocument>,
  ) {}

  async create(createUserDto: CreateParentRegistrationDto): Promise<Parent> {
    const newUser = new this.ParentModel(createUserDto);
    return newUser.save();
  }

  async findAll(): Promise<Parent[]> {
    return this.ParentModel.find().exec();
  }

  async findOne(id: string): Promise<Parent> {
    return this.ParentModel.findById(id).exec();
  }

  async update(
    id: string,
    updateUserDto: UpdateParentRegistrationDto,
  ): Promise<Parent> {
    return this.ParentModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    }).exec();
  }

  async delete(id: string): Promise<Parent> {
    return this.ParentModel.findByIdAndDelete(id).exec();
  }
}
