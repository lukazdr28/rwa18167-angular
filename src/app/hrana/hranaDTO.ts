export interface Hrana {
    uuid?:string
    naziv: string
    opis:string
    cenaRSD:number
    slika:string
    restoran?:{ime:string,adresa:string}
}