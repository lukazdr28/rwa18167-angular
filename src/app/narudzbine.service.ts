import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Narudzbina } from './narudzbine/narudzbinedto';

@Injectable({
  providedIn: 'root'
})
export class NarudzbineService {

  constructor(private authService:AuthService) { }

  async Naruci() {
    return this.authService.AutheticatedPost("/narudzbina/naruci",null)

  }
  async vratiObjedinjeneNarudzbine() : Promise<Narudzbina[]>  {
    const res = <Narudzbina[]>await this.authService.AutheticatedGet("/narudzbina/sve")
    const sve = res.map(n => {
      if("podaciODostavljacu" in n) {
        if(Object.keys(n.podaciODostavljacu!).length > 0) {
         
        return {...n,dostavljac:<{ime:string,prezime:string}>n.podaciODostavljacu,podaciODostavljacu:undefined}
        
        }

        return {...n,dostavljac:undefined,podaciODostavljacu:undefined}
      } 
      return n})
    return sve
  }

  async prihvatiNarudzbinu(uuid:string) {
    const res = await this.authService.AutheticatedPost("/narudzbina/prihvati",{uuid:uuid})
    return res
  }

}
