import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatButtonModule,MatInputModule,NgIf,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent implements OnInit{
  constructor(private authService:AuthService,private router:Router) {}
  selForm: FormGroup<IRegForm> = new FormGroup<IRegForm>({
        "email":new FormControl("",Validators.email),
        "pass":new FormControl("",Validators.required),
        "ime":new FormControl("",Validators.required)})
  ngOnInit(): void {

    this.tip.valueChanges.subscribe(sel => {
      this.selForm = new FormGroup<IRegForm>({
        "email":new FormControl("",Validators.email),
        "pass":new FormControl("",Validators.required),
        "ime":new FormControl("",Validators.required)})

      switch (sel.tip) {
        case "kupac":
          this.selForm.addControl("prezime",new FormControl("",Validators.required))
          this.selForm.addControl("adresa",new FormControl("",Validators.required))

         break
        case "restoran":
          this.selForm.addControl("adresa",new FormControl("",Validators.required))
          break
        case "dostavljac":
          this.selForm.addControl("prezime",new FormControl("",Validators.required))
          break
        default:
          break;
      }

  })
      this.tip.setValue({tip:"kupac"})
}
  tip = new FormGroup({
    'tip': new FormControl('kupac')
  })
  async onSubmit() {
    const res = <{res:string}>await this.authService.register({...this.tip.value,...this.selForm.value})
    console.table(res)
    if(res.res == "OK") {
    this.router.navigate(["/login"])
    } else {
      alert("Greska:" + res.res)
    }

  }
  
  
}

interface IRegForm {
  email: FormControl<string|null>
  pass:FormControl<string|null>
  adresa?:FormControl<string|null>
  ime:FormControl<string|null>
  prezime?:FormControl<string|null>
}

interface ImaAdresu {
  adresa:FormControl<string>
}

interface ImaIme {
  ime:FormControl<string>
}
interface ImaPrezime {
  prezime:FormControl<string>
}

type Kupac = IRegForm & ImaAdresu & ImaIme & ImaPrezime
type Dostavljac = IRegForm & ImaIme & ImaPrezime
type Restoran = IRegForm & ImaIme & ImaAdresu