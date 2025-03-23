import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Hrana } from './hrana/hranaDTO';

@Injectable({
  providedIn: 'root'
})
export class KorpaService {

  constructor(private authService:AuthService) { }
  async vratiSvojuKorpu() : Promise<{ hrana: Hrana; kol: number; }[]> {
    return  <Promise<{hrana:Hrana,kol:number}[]>>this.authService.AutheticatedGet("/korpa/mojakorpa")
  }
  async dodajUKorpu(artikli : [{hrana:Hrana, kol:number}?]) {
    return await this.authService.AutheticatedPost("/korpa/dodaj",artikli)
    

  }
  async isprazniKorpu() {
    return await this.authService.AutheticatedPost("/korpa/isprazni",null)
    

  }
}
