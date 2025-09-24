/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customer: ICustomer[] = [];

  getAllCustomers(): ICustomer[] {
    return this.customer;
  }

  addCustomer(createCustomerDto: CreateCustomerDto): ICustomer {
    const newCustomer: ICustomer = {
      id: Date.now(),
      ...createCustomerDto,
    };
    this.customer.push(newCustomer);
    return newCustomer;
  }
}
