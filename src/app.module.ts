import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatsModule } from './cats/cats.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [CustomerModule, CatsModule, ProductModule, GlobalModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule  {}
