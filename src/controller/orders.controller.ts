/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from '../service/orders.service';
import { CreateOrderDto } from 'src/dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly service: OrdersService) {}

  @Post('/create')
  create(@Body() body: CreateOrderDto) {
    return this.service.createOrder(body);
  }
}
