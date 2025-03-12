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
    this.authService.AutheticatedPost("/hrana/izmeni",hrana);
  }


  constructor(private authService:AuthService) {
  
   }
}
