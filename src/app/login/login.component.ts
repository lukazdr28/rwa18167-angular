import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService) {}

  loginForm = new FormGroup({    email: new FormControl('',[Validators.required,Validators.email]),    pass: new FormControl('',[Validators.required])});
  async onSubmit()  {
    console.table(await this.authService.login(this.loginForm.value))
  }

  
}

