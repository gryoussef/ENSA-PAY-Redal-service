import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './clients.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Client',schema:ClientSchema}])],
  providers: [ClientsService],
  controllers: [ClientsController]
})
export class ClientsModule {}
