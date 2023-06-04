import { PartialType, PickType } from '@nestjs/mapped-types';
import { City } from '../entities/city.entity';

export class UpdateCityDto extends PickType(City, [
  'name',
  'population',
  'size',
] as const) {}
