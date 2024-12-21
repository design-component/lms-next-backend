import { Module } from '@nestjs/common';
import { ParentRegistrationService } from './parent-registration.service';
import { ParentRegistrationController } from './parent-registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from './schemas/parent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Parent.name, schema: ParentSchema }]),
  ],
  controllers: [ParentRegistrationController],
  providers: [ParentRegistrationService],
})
export class ParentRegistrationModule {}
