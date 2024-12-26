import { Injectable } from '@nestjs/common';
import { CreateStudentRegistrationDto } from './dto/create-student-registration.dto';
import { UpdateStudentRegistrationDto } from './dto/update-student-registration.dto';
import { Student, StudentDocument } from './schemas/student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IStudent } from './interfaces/student.interfaces';

@Injectable()
export class StudentRegistrationService {
  constructor(
    @InjectModel(Student.name) private StudentModel: Model<StudentDocument>,
  ) {}

  async create(
    createStudentRegistrationDto: CreateStudentRegistrationDto,
  ): Promise<IStudent> {
    const newUser = new this.StudentModel(createStudentRegistrationDto);
    const savedUser = await newUser.save();
    return savedUser.toObject() as unknown as IStudent;
  }

  async findByEmail(email: string): Promise<IStudent | null> {
    return await this.StudentModel.findOne({ email }).lean<IStudent>();
  }

  async findsByEmail(
    email: string,
  ): Promise<Pick<Student, 'email' | 'name'>[]> {
    return this.StudentModel.find(
      {
        email: { $regex: email, $options: 'i' }, // Partial match on email
        status: 'active', // Check if status is active
      },
      { _id: 1, name: 1, email: 1, password: 1 }, // Projection to include only `_id` and `name`
    ).exec();
  }

  findAll() {
    return `This action returns all studentRegistration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentRegistration`;
  }

  update(
    id: number,
    updateStudentRegistrationDto: UpdateStudentRegistrationDto,
  ) {
    return `This action updates a #${id} studentRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentRegistration`;
  }
}
