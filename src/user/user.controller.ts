/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('user') // Decorator to define the route prefix
export class UserController {
  @Get()
  getUser(): any {
    return {
      message: 'User data retrieved successfully',
      user: { id: 1, name: 'Sakib ahmed', email: 'john.doe@example.com' },
      success: true,
    };
  }
}
