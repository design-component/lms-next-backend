import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateStudentInvitationDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Parent is required' })
  readonly parentId: string[];

  @ApiProperty()
  @IsNotEmpty({ message: 'Student is required' })
  readonly studentId: string;

  @IsOptional()
  @MaxLength(256)
  readonly message: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(['accepted', 'pending', 'rejected'])
  readonly status: string;
}
