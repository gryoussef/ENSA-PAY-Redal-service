import { Module } from '@nestjs/common';

import{MongooseModule} from '@nestjs/mongoose'
import { ClientsModule } from './clients/clients.module';
import { mongodbURL } from 'config/mongodb.config';
@Module({
  imports: [MongooseModule.forRoot(mongodbURL), ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
