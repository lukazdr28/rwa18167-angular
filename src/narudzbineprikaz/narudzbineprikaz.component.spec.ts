import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarudzbineprikazComponent } from './narudzbineprikaz.component';

describe('NarudzbineprikazComponent', () => {
  let component: NarudzbineprikazComponent;
  let fixture: ComponentFixture<NarudzbineprikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarudzbineprikazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarudzbineprikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
