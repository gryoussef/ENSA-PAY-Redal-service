
export interface Facture {
    id:String,
    Montant : Number,
    Paye : Boolean,
    datedAt:Date,
}
export enum TypeFacture{
    EAU="EAU",
    ELECTRECITE="ELECTRECITE",
}