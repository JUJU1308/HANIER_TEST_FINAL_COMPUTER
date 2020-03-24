export class Computer {
    id : number;
    modele: string;
    marque : string;
    type : string;
    category : string;
    prix_achat : number;
    prix_vente : number;
    dateEntreeStock : Date;
    constructor(id? : number, modele? : string, marque? :string, type? : string, category? : string, prix_achet? : number, prix_vente? : number, dateEntreeStock ?: Date) {
        this.id = id;
        this.modele =modele;
        this.marque = marque;
        this.type = type;
        this.category = category;
        this.prix_achat = prix_achet;
        this.prix_vente = prix_vente;
        this.dateEntreeStock = dateEntreeStock;
     }
}

