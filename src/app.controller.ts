import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getCats(): any {
    return cats;
  }

  @Post('')
  createCat(@Body() body): any {
    const cat = new Cat(body.name, body.age);
    cats.push(cat);
    return cat;
  }
}

const cats = [];
class Cat {
  constructor(
    private name,
    private age,
  ) {}
}
