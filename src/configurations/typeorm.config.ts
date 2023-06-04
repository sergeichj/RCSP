import { DataSource, Migration } from 'typeorm';

const ormConfig: DataSource = new DataSource({
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
});
export default ormConfig;
