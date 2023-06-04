import { Injectable } from '@nestjs/common';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resident } from './entities/resident.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResidentsService {
  constructor(
    @InjectRepository(Resident)
    private readonly residentRepository: Repository<Resident>,
  ) {}
  async create(createResidentDto: CreateResidentDto): Promise<Resident> {
    const resident = this.residentRepository.create();
    resident.fullname = createResidentDto.fullname;
    resident.age = createResidentDto.age;
    resident.phonenumber = createResidentDto.phonenumber;
    resident.email = createResidentDto.email;
    return await this.residentRepository.save(resident);
  }

  async findAll(): Promise<Resident[]> {
    return await this.residentRepository.find({});
  }

  async findOne(id: number): Promise<Resident> {
    return await this.residentRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateResidentDto: UpdateResidentDto,
  ): Promise<Resident> {
    const oldResident = await this.residentRepository.findOneBy({ id });
    oldResident.fullname = updateResidentDto.fullname;
    oldResident.age = updateResidentDto.age;
    oldResident.email = updateResidentDto.email;
    oldResident.phonenumber = oldResident.phonenumber;
    return await this.residentRepository.save(oldResident);
  }

  async remove(id: number) {
    return await this.residentRepository.delete({ id });
  }
}
