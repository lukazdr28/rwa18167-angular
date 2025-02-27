import { Component, Input } from '@angular/core';
import { Hrana } from './hranaDTO';

@Component({
  selector: 'app-hrana',
  standalone: true,
  imports: [],
  templateUrl: './hrana.component.html',
  styleUrl: './hrana.component.css'
})
export class HranaComponent {
  @Input() hrana! : Hrana
}
