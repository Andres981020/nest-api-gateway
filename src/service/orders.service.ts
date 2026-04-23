/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(private readonly http: HttpService) {}
  async createOrder(data: any) {
    try {
      const url = 'http://localhost:8080/orders/create';
  
      const response = await firstValueFrom(
        this.http.post(url, data, {
          timeout: 5000
        }),
      );
  
      return response.data;
    } catch(error) {
      throw new HttpException(
        'Orders service unavailable', 
        HttpStatus.BAD_GATEWAY
      );
    }
  }
}
