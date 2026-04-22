/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
    constructor(private readonly http: HttpService) {}


    async createOrder(data: any) {
    const url = 'http://18.118.49.251:8080/orders';

    const response = await firstValueFrom(
      this.http.post(url, data),
    );

    return response.data;
  }
}
