import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResidentsService } from './residents.service';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { Resident } from './entities/resident.entity';

@Controller('residents')
export class ResidentsController {
  constructor(private readonly residentsService: ResidentsService) {}

  @Post()
  create(@Body() createResidentDto: CreateResidentDto): Promise<Resident> {
    return this.residentsService.create(createResidentDto);
  }

  @Get()
  findAll(): Promise<Resident[]> {
    return this.residentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Resident> {
    return this.residentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResidentDto: UpdateResidentDto,
  ): Promise<Resident> {
    return this.residentsService.update(+id, updateResidentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.residentsService.remove(+id);
  }
}
