import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

import {
  CreateParentRegistrationDto,
  UpdateParentRegistrationDto,
} from './dto';
import { Parent, ParentsDocument } from './schemas/parent.schema';
import { IParent } from './interfaces/parent.interfaces';

@Injectable()
export class ParentRegistrationService {
  constructor(
    @InjectModel(Parent.name) private ParentModel: Model<ParentsDocument>,
  ) {}

  async create(createUserDto: CreateParentRegistrationDto): Promise<IParent> {
    const newUser = new this.ParentModel(createUserDto);
    const savedUser = await newUser.save();
    return savedUser.toObject() as unknown as IParent;
  }

  async login(email: string, password: string): Promise<Parent> {
    return;
  }

  async findAll(): Promise<Parent[]> {
    return this.ParentModel.find().exec();
  }

  async findOne(id: string): Promise<Parent> {
    return this.ParentModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<IParent | null> {
    return await this.ParentModel.findOne({ email }).lean<IParent>();
  }

  async findsByEmail(
    email: string,
  ): Promise<Pick<Parent, 'email' | 'name' | 'password'>[]> {
    return this.ParentModel.find(
      {
        email: { $regex: email, $options: 'i' }, // Partial match on email
        status: 'active', // Check if status is active
      },
      { _id: 1, name: 1, email: 1, password: 1 }, // Projection to include only `_id` and `name`
    ).exec();
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
