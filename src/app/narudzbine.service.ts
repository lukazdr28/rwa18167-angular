import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NarudzbineService {

  constructor(private authService:AuthService) { }

  async Naruci() {
    return this.authService.AutheticatedPost("/narudzbina/naruci",null)

  }
  async vratiObjedinjeneNarudzbine()  {
    const sve = await this.authService.AutheticatedGet("/narudzbina/mojenarudzbine") 
    return sve
  }

}
