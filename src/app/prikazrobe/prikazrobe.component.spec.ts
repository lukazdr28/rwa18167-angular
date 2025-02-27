import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazrobeComponent } from './prikazrobe.component';

describe('PrikazrobeComponent', () => {
  let component: PrikazrobeComponent;
  let fixture: ComponentFixture<PrikazrobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrikazrobeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrikazrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
