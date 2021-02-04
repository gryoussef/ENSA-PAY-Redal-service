import * as mongoose from 'mongoose';

export const ClientSchema=new mongoose.Schema({
    tel:String,
    creances:{
        Facture_eau:Boolean,
        Facture_electricite:Boolean,
    },
    FacturesEau : [
        {	
            Montant : Number,
            Paye : Boolean,
            datedAt:Date,
        }
        ],
    FacturesElectricite : [
        {
            Montant : Number,
            Paye : Boolean,
            datedAt:Date,
        }
        ]
});

export interface Client extends mongoose.Document{
    id:String,
    tel:String,
    creances:{
        Facture_eau:Boolean,
        Facture_electricite:Boolean,
    },
    FacturesEau : [
        {	
            id:string,
            Montant : Number,
            Paye : Boolean,
            datedAt:Date,
        }
        ],
    FacturesElectricite : [
        {
            id:string,
            Montant : Number,
            Paye : Boolean,
            datedAt:Date,
            
        }
        ]
}