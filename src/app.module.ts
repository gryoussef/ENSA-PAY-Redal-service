import { Module } from '@nestjs/common';

import{MongooseModule} from '@nestjs/mongoose'
import { ClientsModule } from './clients/clients.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://youssef97:QAuSeedzF6v2X66T@cluster0.6xdno.mongodb.net/test?retryWrites=true&w=majority'), ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
