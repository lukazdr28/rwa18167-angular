import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
const API_URL = `http://localhost:3000`

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private httpClient: HttpClient) { }
  async register(regDTO: any)  {
   const resobs = this.httpClient.post(`${API_URL}/accounts/register`,regDTO)
   const res = await firstValueFrom(resobs)
   return res
  }

  async login(loginDTO: any) {
    const resobs = this.httpClient.post(`${API_URL}/accounts/login`,loginDTO)
    return await firstValueFrom(resobs)
  }
  async AutheticatedGet(endpoint:string) {
    const token = sessionStorage.getItem("JWT_TOKEN");
    if(token == null) {throw new Error("Los login");}
    const resobs = this.httpClient.get(`${API_URL}${endpoint}`,{headers:{Authorization:`Bearer ${token}`}})
    return await firstValueFrom(resobs);

  }

  async AutheticatedPost(endpoint:string,data:any) {
    const token = sessionStorage.getItem("JWT_TOKEN");
    if(token == null) {throw new Error("Los login");}
    const resobs = this.httpClient.post(`${API_URL}${endpoint}`,data,{headers:{Authorization:`Bearer ${token}`}})
    return await firstValueFrom(resobs);

  }
  async AutheticatedPostFile(endpoint:string,file:File) {
    const token = sessionStorage.getItem("JWT_TOKEN");
    if(token == null) {throw new Error("Los login");}
    const data = new FormData()
    data.append("file",file)
    const resobs = this.httpClient.post(`${API_URL}${endpoint}`,data,{headers:{Authorization:`Bearer ${token}`}})
    return await firstValueFrom(resobs);

  }
}
