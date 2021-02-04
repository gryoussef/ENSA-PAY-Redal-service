import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './clients.model';
import { Facture, TypeFacture } from './Dto/facture.dto';

@Injectable()
export class ClientsService {
    constructor(@InjectModel('Client') private clientModel:Model<Client>){}

    async getClients():Promise<Client[]>{
        const clients=await this.clientModel.find().exec();
        return clients as Client[] ;
    }
    async getClient(id:string):Promise<Client>{
        const client:Client =await this.clientModel.findOne({tel:id});
        return client;
    }

    async getAllImpaye(id:string,type:TypeFacture):Promise<any>{
        const client:Client =await this.clientModel.findOne({tel:id});
        switch (type){
            case  TypeFacture.EAU:{
                return client.FacturesEau.filter(item=>item.Paye==false) ;
            }
            case TypeFacture.ELECTRECITE:{
                return client.FacturesElectricite.filter(item=>item.Paye==false) ;
            }
        }
    }

    async getImpayeOutdated(id:string,type:TypeFacture):Promise<any>{
        const client:Client =await this.clientModel.findOne({tel:id});
        switch (type){
            case  TypeFacture.EAU:{
                return client.FacturesEau.filter(item=>item.Paye==false && item.datedAt.getTime()<Date.now()) ;
            }
            case TypeFacture.ELECTRECITE:{
                return client.FacturesElectricite.filter(item=>item.Paye==false && item.datedAt.getTime()<Date.now()) ;
            }
        }
    }

    async payeFacture(id:string,type:TypeFacture,idFacture:string):Promise<any>{
        const client:Client =await this.clientModel.findOne({tel:id});
        switch (type){
            case  TypeFacture.EAU:{
                client.FacturesEau.map(item => {
                if(item.id==idFacture){
                    item.Paye=true
                }}) ;
                client.save();
                return client.FacturesEau.find(item => item.id==idFacture);
            }
            case TypeFacture.ELECTRECITE:{
                client.FacturesElectricite.map(item => {
                    if(item.id==idFacture){
                        item.Paye=true
                    }}) ;
                    client.save();
                    return client.FacturesElectricite.find(item => item.id==idFacture);
            }
        }
    }
    
  

    insertClient():Promise<Client>{
        const newClient=new this.clientModel({
            tel:'0766119237',
            creances:{
                Facture_eau:true,
                Facture_electricite:false,
            },
            FacturesEau : [
                {	
                    Montant : 969,
                    Paye : false,
                    datedAt:'2020-12-09',
                    Creance:'EAU',
                    Creancier:'REDAL',
                },
                {	
                    Montant : 120,
                    Paye : false,
                    datedAt:'2021-01-09',
                    Creance:'EAU',
                    Creancier:'REDAL',
                },
                {	
                    Montant : 152,
                    Paye : true,
                    datedAt:'2021-11-09',
                    Creance:'EAU',
                    Creancier:'REDAL',
                }
                ],
            FacturesElectricite : [
                {
                    Montant : 120,
                    Paye : false,
                    datedAt:'2020-11-09',
                    Creance:'ELECTRICITE',
                    Creancier:'REDAL',
                }
                ]
        })
        return newClient.save();

    }


}
