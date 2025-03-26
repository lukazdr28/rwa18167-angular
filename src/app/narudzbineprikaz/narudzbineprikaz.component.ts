import { Component } from '@angular/core';
import { NarudzbineService } from '../narudzbine.service';
import { from } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NarudzbineComponent } from '../narudzbine/narudzbine.component';
import { AuthService } from '../auth.service';
import { Narudzbina } from '../narudzbine/narudzbinedto';

@Component({
  selector: 'app-narudzbineprikaz',
  standalone: true,
  imports: [AsyncPipe,NarudzbineComponent],
  templateUrl: './narudzbineprikaz.component.html',
  styleUrl: './narudzbineprikaz.component.css'
})
export class NarudzbineprikazComponent {
  narudzbine$
  constructor(private narudzbineService:NarudzbineService) {
    this.narudzbine$ =  from(this.narudzbineService.vratiObjedinjeneNarudzbine())
    }
     trebaDugme(n:Narudzbina) : boolean  {
      const json = sessionStorage.getItem("LOGGED_IN_PROFILE")
      if(!json) {return false}
      const tip = JSON.parse(json)["tip"]
      if(tip == "kupac" && n.status == "prihvacena") {return true}
      if(tip == "dostavljac" && n.status == "nova") {return true}
      if(tip == "restoran" && n.status == "nova" && n.dostavljac) {return true}
      return false

    }
}
