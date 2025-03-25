import { Hrana } from "../hrana/hranaDTO"

export interface Narudzbina {
    uuid:string
    vremeKreiranja:Date
    vremePrihvatanja?:Date
    vremeIspunjenja?:Date
    ukupnaCenaRSD:number
    artikli:{kol:number,hrana:Hrana}[]
    status:string
    dostavljac?:{ime:string,prezime:string}
    kupac?:{ime:string,prezime:string,adresa:string}

    
}