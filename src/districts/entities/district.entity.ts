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
import { City } from 'src/cities/entities/city.entity';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  maxLength,
} from 'class-validator';

@Entity('districts')
export class District {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  @ApiProperty({ example: 'Садовая', description: 'Название улицы' })
  @Column({ unique: true })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'Управляющий на этой улице',
  })
  @Column()
  fullnameleader: string;

  @OneToMany((type) => Resident, (resident) => resident.district)
  residents: Resident[];

  @ManyToMany((type) => City, (city) => city.districts)
  @JoinTable({
    name: 'city_district',
    joinColumn: { name: 'district_id' },
    inverseJoinColumn: { name: 'city_id' },
  })
  cities: City[];
}
