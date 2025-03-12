import { Component, Input } from '@angular/core';
import { Hrana } from './hranaDTO';
import { EditableComponent, EditModeDirective, ViewModeDirective } from '@ngneat/edit-in-place'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { izmeniHranu } from '../hranarx/hranarx.actions';
@Component({
  selector: 'app-hrana',
  standalone: true,
  imports: [EditableComponent,EditModeDirective,ViewModeDirective,ReactiveFormsModule],
  templateUrl: './hrana.component.html',
  styleUrl: './hrana.component.css'
})


export class HranaComponent {
  @Input() hrana! : Hrana
  constructor(private store:Store<any>)  {
    this.store = store
  }
  txt_naziv = new FormControl("",Validators.minLength(1))
  txt_opis = new FormControl("",Validators.minLength(1))
  txt_cena = new FormControl(0,Validators.min(0))

  update() {
    const tmp:Hrana = {...this.hrana}
    let trebaUpdate = false
    if(this.txt_naziv.value) {
      tmp.naziv = this.txt_naziv.value;
      trebaUpdate = true
    }
    if(this.txt_opis.value) {
      tmp.opis = this.txt_opis.value;
      trebaUpdate = true
    }
    if(this.txt_cena.value) {
      tmp.cenaRSD = this.txt_cena.value;
      trebaUpdate = true
    }
    if(!trebaUpdate) {return}
    this.store.dispatch(izmeniHranu(tmp))

  }

  cancel() {
    console.log("cancel")
    this.txt_naziv.setValue(this.hrana.naziv);
    this.txt_opis.setValue(this.hrana.opis);
    this.txt_cena.setValue(this.hrana.cenaRSD);
  }
}


