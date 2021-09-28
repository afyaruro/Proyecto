import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoapacienteComponent } from './diagnosticoapaciente.component';

describe('DiagnosticoapacienteComponent', () => {
  let component: DiagnosticoapacienteComponent;
  let fixture: ComponentFixture<DiagnosticoapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoapacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
