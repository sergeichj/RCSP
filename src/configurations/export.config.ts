import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTypeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'education',
  username: 'postgres',
  password: 'Qazwsx2003',
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: true,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
});
