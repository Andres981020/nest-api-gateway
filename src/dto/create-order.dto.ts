/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, Min } from 'class-validator';
export class CreateOrderDto {
    @IsNotEmpty()
    customerId: string;

    @IsNumber()
    @Min(1)
    total: number;
}