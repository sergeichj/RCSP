import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Resident } from 'src/residents/entities/resident.entity';
import { type } from 'os';
import { District } from 'src/districts/entities/district.entity';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity('cities')
export class City {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Москва', description: 'Название города' })
  @Column({})
  @MinLength(3)
  @MaxLength(20)
  name: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '1000', description: 'Размер города' })
  @Column()
  size: number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '1000000', description: 'Всего жителей' })
  @Column()
  population: number;

  @OneToMany((type) => Resident, (resident) => resident.city)
  residents: Resident[];

  @ManyToMany((type) => District, (district) => district.cities)
  districts: District[];
}
