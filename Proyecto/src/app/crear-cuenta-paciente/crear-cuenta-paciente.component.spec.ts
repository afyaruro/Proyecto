import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaPacienteComponent } from './crear-cuenta-paciente.component';

describe('CrearCuentaPacienteComponent', () => {
  let component: CrearCuentaPacienteComponent;
  let fixture: ComponentFixture<CrearCuentaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCuentaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCuentaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
