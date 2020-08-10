import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items'
  }

  @Get(':id')
  findId(@Param('id') id): string {
    return `Item with id : ${id}`
  }

  @Post('create')
  create(@Body() createItemDto: CreateItemDto): string {
    return `name : ${createItemDto.name}, description : ${createItemDto.description}`
  }

  @Put('update/:id')
  update(@Param('id') id, updateItemDto: CreateItemDto): string {
    return `Update item with id ${id}`
  }

  @Delete('delete/:id')
  delete(@Param('id') id): string {
    return `Delete item with id : ${id}`
  }
}
