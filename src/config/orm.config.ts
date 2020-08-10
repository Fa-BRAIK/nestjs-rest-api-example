import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'dev',
  password: '',
  database: 'test',
  entities: [__dirname + '../**/*.entity.ts'],
  synchronize: true,
}
