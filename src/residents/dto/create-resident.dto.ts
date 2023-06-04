import { PickType } from '@nestjs/mapped-types';
import { Resident } from '../entities/resident.entity';

export class CreateResidentDto extends PickType(Resident, [
  'fullname',
  'phonenumber',
  'age',
  'email',
] as const) {}
