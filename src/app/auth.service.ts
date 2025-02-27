import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  async register(regDTO: any)  {
   const resobs = this.httpClient.post("http://localhost:3000/accounts/register",regDTO)
   return await firstValueFrom(resobs)
  }

  async login(loginDTO: any) {
    const resobs = this.httpClient.post("http://localhost:3000/accounts/login",loginDTO)
    return await firstValueFrom(resobs)
  }
}
