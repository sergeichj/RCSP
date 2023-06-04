import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City) private readonly cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const city = await this.cityRepository.create();
    city.name = createCityDto.name;
    city.size = createCityDto.size;
    city.population = createCityDto.population;
    return await this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return await this.cityRepository.find({
      relations: {
        residents: true,
        districts: true,
      },
    });
  }

  async findOne(id: number): Promise<City> {
    return await this.cityRepository.findOneBy({ id });
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    const oldCity = await this.cityRepository.findOneBy({ id });
    oldCity.name = updateCityDto.name;
    oldCity.size = updateCityDto.size;
    oldCity.population = updateCityDto.population;
    return this.cityRepository.save(oldCity);
  }

  async remove(id: number) {
    return await this.cityRepository.delete({ id });
  }
}
