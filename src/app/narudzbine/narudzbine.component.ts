import { Component, EventEmitter, Input, Output } from '@angular/core';
import { from } from 'rxjs';
import { NarudzbineService } from '../narudzbine.service';
import { AsyncPipe } from '@angular/common';
import { Narudzbina } from './narudzbinedto';
import { HranaComponent } from "../hrana/hrana.component";
import { AuthService } from '../auth.service';

import { QRCodeComponent, QRCodeModule } from 'angularx-qrcode';
import { MatButton, MatButtonModule } from "@angular/material/button";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-narudzbine',
  standalone: true,
  imports: [HranaComponent, QRCodeModule, MatButtonModule,RouterModule],
  templateUrl: './narudzbine.component.html',
  styleUrl: './narudzbine.component.css'
})

export class NarudzbineComponent {
  constructor(private narudzbinaService:NarudzbineService,private router:Router) {}
  @Input() n! : Narudzbina
  @Input() prihvatiDugme : boolean|undefined
  @Output() prihvacena = new EventEmitter<{ narudzbina: Narudzbina; poruka: string; greska: boolean; }>
  
  dostavljac(): boolean {
    const json = sessionStorage.getItem("LOGGED_IN_PROFILE")
    if(!json) {return false}
    const tip = JSON.parse(json)["tip"]
    if(tip == "dostavljac") {return true}
    return false
  }

  async prihvati() {
    let greska = false
    let poruka = ""
    try {
      const res = await this.narudzbinaService.prihvatiNarudzbinu(this.n.uuid)
      poruka = "Potvrdjeno!"
    } catch (error) {
      greska = true
      poruka = "Greska pri potvrdi"
    }
    
    this.prihvacena?.emit({narudzbina:this.n,greska:greska,poruka:poruka})
  }
}



