import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from './entities/district.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DistrictsService {
  constructor(
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
  ) {}

  async create(createDistrictDto: CreateDistrictDto): Promise<District> {
    const district = await this.districtRepository.create();
    district.name = createDistrictDto.name;
    district.fullnameleader = createDistrictDto.fullnameleader;
    return await this.districtRepository.save(district);
  }

  async findAll(): Promise<District[]> {
    return await this.districtRepository.find({
      relations: {
        cities: true,
        residents: true,
      },
    });
  }

  async findOne(id: number): Promise<District> {
    return await this.districtRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateDistrictDto: UpdateDistrictDto,
  ): Promise<District> {
    const oldDistrict = await this.districtRepository.findOneBy({ id });
    oldDistrict.name = updateDistrictDto.name;
    oldDistrict.fullnameleader = updateDistrictDto.fullnameleader;
    return await this.districtRepository.save(oldDistrict);
  }

  async remove(id: number) {
    return await this.districtRepository.delete({ id });
  }
}
