import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Item } from './item.entity'

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemsRepository.find()
  }

  async findOne(id: number): Promise<Item> {
    return await this.itemsRepository.findOne(id)
  }
}
