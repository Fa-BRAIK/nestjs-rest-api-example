import { Injectable } from '@nestjs/common'
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
  private readonly _items: Item[] = [
    {
      id: 1,
      name: 'name - 1',
      description: 'a random description',
      quantity: 10,
    },
    {
      id: 2,
      name: 'name - 2',
      description: 'a random description',
      quantity: 10,
    },
    {
      id: 3,
      name: 'name - 3',
      description: 'a random description',
      quantity: 10,
    },
  ]

  findAll(): Item[] {
    return this._items
  }

  findOne(id: number): Item {
    return this._items.find(item => item.id == id)
  }
}
