import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, RouterLink,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService,private router:Router) {}

  loginForm = new FormGroup({    email: new FormControl('',[Validators.required,Validators.email]),    pass: new FormControl('',[Validators.required])});
  ngOnInit () {
    if(sessionStorage.getItem("JWT_TOKEN") != null) {
      this.router.navigate(["/kupi"]);
      return;
    }
  }
  async onSubmit()  {
    const res:any = await this.authService.login(this.loginForm.value)
    console.table(res)
    if(res["token"] == undefined) {
      return
    }
    sessionStorage.setItem("JWT_TOKEN",res["token"]);
    const prof = await this.authService.AutheticatedGet("/accounts/profile")
    sessionStorage.setItem("LOGGED_IN_PROFILE",JSON.stringify(prof))
    this.router.navigate(["/kupi"])

  }

  
}

