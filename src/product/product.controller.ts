import { Controller, Get } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';

@Controller('product')
export class ProductController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomersFromTheProductController() {
    this.customerService.getAllCustomers();
  }
}
