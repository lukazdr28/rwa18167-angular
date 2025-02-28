import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService,private router:Router) {}

  loginForm = new FormGroup({    email: new FormControl('',[Validators.required,Validators.email]),    pass: new FormControl('',[Validators.required])});
  async onSubmit()  {
    const res:any = await this.authService.login(this.loginForm.value)
    console.table(res)
    if(res["token"] == undefined) {
      return
    }
    sessionStorage.setItem("JWT_TOKEN",res["token"]);
    this.router.navigate(["/kupi"])

  }

  
}

