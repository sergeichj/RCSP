import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';

@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto): Promise<District> {
    return this.districtsService.create(createDistrictDto);
  }

  @Get()
  findAll(): Promise<District[]> {
    return this.districtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<District> {
    return this.districtsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ): Promise<District> {
    return this.districtsService.update(+id, updateDistrictDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtsService.remove(+id);
  }
}
