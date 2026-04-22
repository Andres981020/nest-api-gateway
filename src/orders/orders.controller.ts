/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly service: OrdersService) {}

    @Post("create")
  create(@Body() body: any) {
    return this.service.createOrder(body);
  }
}
