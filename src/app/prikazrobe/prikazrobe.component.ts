import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HranaService } from '../hrana.service';
import { HranaComponent } from "../hrana/hrana.component";
import { Hrana } from '../hrana/hranaDTO';
import { Store, StoreModule } from '@ngrx/store';
import { HranaState, hranaReducer } from '../hranarx/hranarx.reducer';
import { selectAllHrana } from '../hranarx/hrana.selector';
import { ucitajHranu } from '../hranarx/hranarx.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Router, RouterModule } from '@angular/router';
import { KorpaService } from '../korpa.service';

@Component({
  selector: 'app-prikazrobe',
  standalone: true,
  imports: [CommonModule, HranaComponent,RouterModule],
  templateUrl: './prikazrobe.component.html',
  styleUrl: './prikazrobe.component.css'
})
export class PrikazrobeComponent implements OnInit {
  hrana$
  odabrani = new class {
    [uuid:string]:{hrana:Hrana,kol:number}|undefined,
  }
  odabrani_len = 0
  editPrikaz : boolean|undefined = false
  tip :string|undefined = undefined
  constructor(private store:Store<any>,public router:Router,private korpaService:KorpaService) {
   this.hrana$ = this.store.select(selectAllHrana)
   this.store = store
  }
 

  async ngOnInit(): Promise<void> {
    const json = sessionStorage.getItem("LOGGED_IN_PROFILE")
    if(!json) {return}
    this.tip = JSON.parse(json)["tip"]
    this.editPrikaz = this.tip == "restoran"
    this.store.dispatch(ucitajHranu())
  }
  async odabir(e:{hrana:Hrana,kol:number}) {
    if(this.editPrikaz) {return}
    if(!e.hrana.uuid) {return}
    let tmp = this.odabrani[e.hrana.uuid] ?? {hrana:e.hrana,kol:0}
    tmp.kol += e.kol
    if (tmp.kol < 1) {
      const uuid = tmp.hrana.uuid!
      if(uuid in  this.odabrani ) {
        delete this.odabrani[uuid]
      }
      this.odabrani_len = Object.keys(this.odabrani).length
      return
    }
    this.odabrani[e.hrana.uuid] = tmp
    this.odabrani_len = Object.keys(this.odabrani).length
    console.log(this.odabrani_len)

  }
  async dodajSve() {
    const hrana_array:[{hrana:Hrana,kol:number}?] = []
    for(const hrana in this.odabrani) {
      hrana_array.push(this.odabrani[hrana])
    }

    console.log(this.korpaService.dodajUKorpu(hrana_array))
    console.log(this.korpaService.vratiSvojuKorpu())
    this.router.navigate(["/korpa"])
    console.log(hrana_array)
  }
  
}
