import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './item.entity'

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    return await this.itemsService.findOne(id)
  }

  @Post('create')
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto)
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id,
    @Body() updateItemDto: CreateItemDto,
  ): Promise<Item> {
    return this.itemsService.update(id, updateItemDto)
  }

  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.itemsService.remove(id)
  }
}
