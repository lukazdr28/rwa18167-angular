import { Component, Input } from '@angular/core';
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
  
  async prihvati() {
    const res = this.narudzbinaService.prihvatiNarudzbinu(this.n.uuid)
    window.location.reload();
  }
}



