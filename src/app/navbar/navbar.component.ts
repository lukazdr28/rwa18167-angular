import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from "@angular/material/button";
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private ruter:Router) {
    this.router = ruter 
  }
  router:Router
  trebaOdjava:boolean = false
  ngOnInit() {
   this.trebaOdjava = !!sessionStorage.getItem("JWT_TOKEN") 
  }
odjava() {
  sessionStorage.removeItem("JWT_TOKEN")
  this.ruter.navigate(["/"])
}


}
