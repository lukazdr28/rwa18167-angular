import { Injectable } from '@angular/core';
import { Hrana } from './hrana/hranaDTO';
const mockDB : Hrana[] = []
@Injectable({
  providedIn: 'root'
})

export class HranaService {
  preuzmiHranu() : Hrana[] {
    return mockDB

  }
  constructor() { }
}
