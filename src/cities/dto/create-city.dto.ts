import { PickType } from '@nestjs/mapped-types';
import { City } from '../entities/city.entity';

export class CreateCityDto extends PickType(City, [
  'name',
  'size',
  'population',
] as const) {}
