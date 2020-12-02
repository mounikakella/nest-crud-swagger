import { Controller, Get } from '@nestjs/common';
import {Crud} from '@nestjsx/crud';
import { AppService } from './app.service';
import {AppEntity} from './app.entity'

@Crud({
  model: {
    type: AppEntity
  }
})
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
