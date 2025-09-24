/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsInt, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}
