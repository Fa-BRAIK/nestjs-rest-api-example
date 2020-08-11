import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Item } from './item.entity'
import { CreateItemDto } from './dto/create-item.dto'

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

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsRepository.save(createItemDto)
  }

  async update(id: number, updateItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsRepository.save({
      id,
      name: updateItemDto.name,
      description: updateItemDto.description,
      quantity: updateItemDto.quantity,
    })
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id)
  }
}
