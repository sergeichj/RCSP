import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { City } from 'src/cities/entities/city.entity';
import { District } from 'src/districts/entities/district.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity('residents')
export class Resident {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @ApiProperty({ example: 'Иванов Сергей Иванович', description: 'ФИО' })
  @Column()
  fullname: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @MaxLength(12)
  @ApiProperty({ example: '+7 (812) 123-45-67', description: 'Номер телефона' })
  @Column()
  phonenumber: number;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(1)
  @MaxLength(3)
  @ApiProperty({ example: '23', description: 'Возраст' })
  @Column()
  age: number;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @ApiProperty({ example: 'mail@mail.ru', description: 'Почта' })
  @Column()
  email: string;

  @ManyToOne((type) => City, (city) => city.residents)
  city: City;

  @ManyToOne((type) => District, (district) => district.residents)
  district: District;
}
