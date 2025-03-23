import { Component } from '@angular/core';
import { HranaComponent } from '../hrana/hrana.component';
import { KorpaService } from '../korpa.service';
import { Observable, from } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Hrana } from '../hrana/hranaDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-korpaprikaz',
  standalone: true,
  imports: [HranaComponent,AsyncPipe],
  templateUrl: './korpaprikaz.component.html',
  styleUrl: './korpaprikaz.component.css'
})
export class KorpaprikazComponent {
  korpa$
  constructor(private korpaService:KorpaService,private router:Router) {
    this.korpa$ =  from(this.korpaService.vratiSvojuKorpu()) 
  }

  async isprazniKorpu() {
    this.korpaService.isprazniKorpu()
    this.router.navigate(['/kupi'])
  }
}
