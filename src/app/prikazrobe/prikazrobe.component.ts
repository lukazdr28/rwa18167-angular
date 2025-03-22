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

@Component({
  selector: 'app-prikazrobe',
  standalone: true,
  imports: [CommonModule, HranaComponent],
  templateUrl: './prikazrobe.component.html',
  styleUrl: './prikazrobe.component.css'
})
export class PrikazrobeComponent implements OnInit {
  hrana$
  odabrani = new class {
    [uuid:string]:{hrana:Hrana,kol:number}|undefined
  }
  editPrikaz : boolean|undefined = false
  tip :string|undefined = undefined
  constructor(private store:Store<any>) {
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
      return
    }
    this.odabrani[e.hrana.uuid] = tmp
    console.log(this.odabrani)

  }
  
}
