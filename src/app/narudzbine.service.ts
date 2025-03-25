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
    const sve = await this.authService.AutheticatedGet("/narudzbina/sve") 
    return <Narudzbina[]>sve
  }

  async prihvatiNarudzbinu(uuid:string) {
    const res = await this.authService.AutheticatedPost("/narudzbina/prihvati",uuid)
    return res
  }

}
