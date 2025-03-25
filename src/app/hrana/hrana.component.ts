import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hrana } from './hranaDTO';
import { EditableComponent, EditModeDirective, ViewModeDirective } from '@ngneat/edit-in-place'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { izmeniHranu, napraviHranu, objaviSliku, ukloniHranu } from '../hranarx/hranarx.actions';
@Component({
  selector: 'app-hrana',
  standalone: true,
  imports: [EditableComponent,EditModeDirective,ViewModeDirective,ReactiveFormsModule],
  templateUrl: './hrana.component.html',
  styleUrl: './hrana.component.css'
})


export class HranaComponent {
  color = "black"
  border = `border: ${this.color} dashed 2px;`
  @Input() hrana! : Hrana
  @Input() set izabranaKolicina(value:number|undefined) {
    this.izabranaKolicina_int = value ?? 0
    if(this.izabranaKolicina_int <= 0) {
      this.color = "black"
      this.border = `border: ${this.color} dashed 2px;`
    } else {
      this.color = "green"
      this.border = `border: ${this.color} dashed 2px;`
    }
  } get izabranaKolicina() : number|undefined {
    return this.izabranaKolicina_int

  }
  private izabranaKolicina_int : number = 0
@Input() edit : boolean|undefined
@Input() neCrtajSliku:boolean|undefined
@Input() canAdd : boolean|undefined
@Output() javiOdabir = new EventEmitter<{hrana:Hrana,kol:number}>()
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
  ukloniHranu() {
    if(this.hrana.uuid) {
    this.store.dispatch(ukloniHranu({uuid:this.hrana.uuid}))
    }
  }
  objaviHranu() {
    if(this.hrana.uuid) {return}
    if(this.hrana.cenaRSD == -1 || this.hrana.naziv.includes('\u180E') ||  this.hrana.opis.includes('\u180E')) {
      alert("Niste popunili sva neophodna polja!")
      return;}
    this.store.dispatch(napraviHranu(this.hrana))
  }


  async objaviSliku() {
    if(!this.edit) {return}
    const fileupload = document.createElement("input")
    fileupload.type = 'file'
    const filepromise = new Promise(function(resolve,reject) {
      fileupload.onchange = (e) => {
        if(fileupload.files == null) {reject("Fajlovi su null"); return;}
        resolve(fileupload.files[0])
      }
    })
  fileupload.click()
   const izabraniFajl:File = <File>await filepromise
   console.log(izabraniFajl)
   this.store.dispatch(objaviSliku({file:izabraniFajl,hrana:this.hrana}))

  }

  async oznaciHranu() {
    if(this.edit || !this.canAdd) {return}
    this.javiOdabir.emit({hrana:this.hrana,kol:1})


  }
  async ponistiOdabir(e:Event) {
    if(this.edit || !this.canAdd) {return}
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    this.javiOdabir.emit({hrana:this.hrana,kol:-1})

  }
  
}


