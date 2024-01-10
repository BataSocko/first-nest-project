import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import middleware1 from './middlewares/middleware1';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(middleware1);
  await app.listen(3000);
}
bootstrap();
