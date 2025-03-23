import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorpaprikazComponent } from './korpaprikaz.component';

describe('KorpaprikazComponent', () => {
  let component: KorpaprikazComponent;
  let fixture: ComponentFixture<KorpaprikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KorpaprikazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorpaprikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
