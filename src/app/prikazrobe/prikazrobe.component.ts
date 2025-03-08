import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  constructor(private store:Store<any>) {
   this.hrana$ = this.store.select(selectAllHrana)
   this.store = store
  }
 

  async ngOnInit(): Promise<void> {
    this.store.dispatch(ucitajHranu())
  }
  
}
