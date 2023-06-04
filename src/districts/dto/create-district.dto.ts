import { PickType } from '@nestjs/mapped-types';
import { District } from '../entities/district.entity';
import { Type } from 'class-transformer';

export class CreateDistrictDto extends PickType(District, [
  'name',
  'fullnameleader',
] as const) {}
