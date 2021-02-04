import { Controller, Post, Get, Param, Patch, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.model';
import { TypeFacture } from './Dto/facture.dto';

@Controller('clients')
export class ClientsController {

    constructor(private clientService:ClientsService){}

    @Get()
    async getClients():Promise<Client[]>{
         return this.clientService.getClients();
    }

    @Get('/:id')
    async getClient(@Param('id')tel:string):Promise<Client>{
        return this.clientService.getClient(tel);
    }

    @Get('/:id/impaye/:type')
    async getImpaye(@Param('id')tel:string,@Param('type')type:TypeFacture):Promise<any>{
        return this.clientService.getAllImpaye(tel,type);
    }

    @Get('/:id/outdated/:type')
    async getImpayeOutdated(@Param('id')tel:string,@Param('type')type:TypeFacture):Promise<any>{
        return this.clientService.getImpayeOutdated(tel,type);
    }

    @Patch('/:id/paye/:type')
    async payeFacture(@Param('id')tel:string,@Param('type')type:TypeFacture,@Body('idFacture')idFacture:string):Promise<any>{
        return this.clientService.payeFacture(tel,type,idFacture) ;
    }

    @Post()
    async addClients( ):Promise<Client>{
        return this.clientService.insertClient() ;
    }
   
    

}
