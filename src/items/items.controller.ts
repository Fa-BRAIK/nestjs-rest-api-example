import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Item> {
    return await this.itemsService.findOne(id)
  }

  // @Post('create')
  // create(@Body() createItemDto: CreateItemDto): string {
  //   return `name : ${createItemDto.name}, description : ${createItemDto.description}`
  // }

  // @Put('update/:id')
  // update(@Param('id') id, updateItemDto: CreateItemDto): string {
  //   return `Update item with id ${id}`
  // }

  // @Delete('delete/:id')
  // delete(@Param('id') id): string {
  //   return `Delete item with id : ${id}`
  // }
}
