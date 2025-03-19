import { Injectable } from '@angular/core';
import { Hrana } from './hrana/hranaDTO';
import { AuthService } from './auth.service';
const mockDB : Hrana[] = []
@Injectable({
  providedIn: 'root'
})

export class HranaService {
  async preuzmiHranu() : Promise<any[]> {
    
    
    const hrana:any = await this.authService.AutheticatedGet("/hrana/ponuda");
    return hrana;

  }

  async izmeniHranu(hrana:Hrana)  {
    if(!hrana.uuid) {return}
    this.authService.AutheticatedPost("/hrana/izmeni",hrana);
  }
  async ukloniHranu(dto:any)  {
    this.authService.AutheticatedPost("/hrana/obrisi",dto);
  }

  async dodajHranu(hrana:Hrana)  {
    this.authService.AutheticatedPost("/hrana/dodaj",hrana);
  }


  constructor(private authService:AuthService) {
  
   }
}
