import { Injectable } from '@nestjs/common';
import { CreateStudentInvitationDto } from './dto/create-student-invitation.dto';
import { UpdateStudentInvitationDto } from './dto/update-student-invitation.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  StudentInvitation,
  StudentInvitationDocument,
} from './schemas/student.schema';
import { Model } from 'mongoose';
import { IStudentInvitation } from './interfaces/student.interfaces';

@Injectable()
export class StudentInvitationService {
  constructor(
    @InjectModel(StudentInvitation.name)
    private StudentInvitationModel: Model<StudentInvitationDocument>,
  ) {}

  async create(
    createStudentInvitationDto: CreateStudentInvitationDto,
  ): Promise<IStudentInvitation> {
    const response = new this.StudentInvitationModel(
      createStudentInvitationDto,
    );
    const save = await response.save();
    return save.toObject() as unknown as IStudentInvitation;
  }

  async findByStudentParentId(
    studentId: string,
    parentId: string,
  ): Promise<IStudentInvitation | null> {
    const response = await this.StudentInvitationModel.findOne({
      studentId: studentId,
      parentId: parentId,
    }).lean<IStudentInvitation>();
    return response;
  }

  findAll() {
    return `This action returns all studentInvitation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentInvitation`;
  }

  update(id: number, updateStudentInvitationDto: UpdateStudentInvitationDto) {
    return `This action updates a #${id} studentInvitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentInvitation`;
  }
}
