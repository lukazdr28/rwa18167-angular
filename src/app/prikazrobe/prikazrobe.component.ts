import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HranaService } from '../hrana.service';
import { HranaComponent } from "../hrana/hrana.component";

@Component({
  selector: 'app-prikazrobe',
  standalone: true,
  imports: [CommonModule, HranaComponent],
  templateUrl: './prikazrobe.component.html',
  styleUrl: './prikazrobe.component.css'
})
export class PrikazrobeComponent {
  constructor(public hranaService:HranaService) {}
  
}
