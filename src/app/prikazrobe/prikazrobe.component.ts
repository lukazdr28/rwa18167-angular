import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HranaService } from '../hrana.service';
import { HranaComponent } from "../hrana/hrana.component";
import { Hrana } from '../hrana/hranaDTO';

@Component({
  selector: 'app-prikazrobe',
  standalone: true,
  imports: [CommonModule, HranaComponent],
  templateUrl: './prikazrobe.component.html',
  styleUrl: './prikazrobe.component.css'
})
export class PrikazrobeComponent implements OnInit {
  hrana:Hrana[] | undefined
  constructor(public hranaService:HranaService) {}
  async ngOnInit(): Promise<void> {
    this.hrana = await this.hranaService.preuzmiHranu()
  }
  
}
