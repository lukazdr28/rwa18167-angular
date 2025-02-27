import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HranaComponent } from './hrana.component';

describe('HranaComponent', () => {
  let component: HranaComponent;
  let fixture: ComponentFixture<HranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HranaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
