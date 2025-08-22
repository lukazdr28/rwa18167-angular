import { Component } from '@angular/core';
import { HranaComponent } from '../hrana/hrana.component';
import { KorpaService } from '../korpa.service';
import { Observable, from } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Hrana } from '../hrana/hranaDTO';
import { Router } from '@angular/router';
import { NarudzbineService } from '../narudzbine.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-korpaprikaz',
  standalone: true,
  imports: [HranaComponent,AsyncPipe,MatButtonModule],
  templateUrl: './korpaprikaz.component.html',
  styleUrl: './korpaprikaz.component.css'
})
export class KorpaprikazComponent {

  korpa$
  constructor(private korpaService:KorpaService,private narudzbineService:NarudzbineService,private router:Router) {
    if(this.router.url.includes('korpa')) {
    this.korpa$ =  from(this.korpaService.vratiSvojuKorpu())
    } 
  }

  async isprazniKorpu() {
    this.korpaService.isprazniKorpu()
    this.router.navigate(['/kupi'])
  }
  ngOnInit() {
        if(this.router.url.includes('korpa')) {
    this.korpa$ =  from(this.korpaService.vratiSvojuKorpu())
    } 
  }

  async potvrdiNarudzbinu() {
     const uuid = this.narudzbineService.Naruci()
     console.log(this.narudzbineService.vratiObjedinjeneNarudzbine())
      this.router.navigate(['/kupi'])
    }
}
