import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {AppEntity} from './app.entity';


@Injectable()
export class UsersService extends TypeOrmCrudService<AppEntity>{
  constructor(@InjectRepository(AppEntity) usersRepository: Repository<AppEntity>){
    super(usersRepository);
  }
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
