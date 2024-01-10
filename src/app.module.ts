import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatsModule } from './cats/cats.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';
import { LoggingMiddleware } from './middlewares/middleware3';

@Module({
  imports: [CustomerModule, CatsModule, ProductModule, GlobalModule],
  controllers: [],
  providers: [Logger],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
