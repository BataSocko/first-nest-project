import { Controller, Get } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomer() {
    return this.customerService.getAllCustomers();
  }
}
