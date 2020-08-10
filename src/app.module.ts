import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsController } from './items/items.controller'
import { ItemsService } from './items/items.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ormConfig } from './config/orm.config'
import { ItemsModule } from './items/items.module'

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot(ormConfig)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
