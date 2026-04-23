import { Module } from '@nestjs/common';
import { OrdersController } from '../controller/orders.controller';
import { HttpModule } from '@nestjs/axios';
import { OrdersService } from 'src/service/orders.service';

@Module({
  imports: [HttpModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
