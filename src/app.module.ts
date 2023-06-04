import { Module } from '@nestjs/common';
import { CitiesModule } from './cities/cities.module';
import { DistrictsModule } from './districts/districts.module';
import { ResidentsModule } from './residents/residents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './configurations/export.config';

@Module({
  imports: [
    CitiesModule,
    DistrictsModule,
    ResidentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'education',
      username: 'postgres',
      password: 'Qazwsx2003',
      entities: ['dist/**/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true,
      migrationsTableName: 'migrations',
      migrations: ['src/migrations/*.ts'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
