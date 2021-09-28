import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientePagoComponent } from './paciente-pago.component';

describe('PacientePagoComponent', () => {
  let component: PacientePagoComponent;
  let fixture: ComponentFixture<PacientePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientePagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
