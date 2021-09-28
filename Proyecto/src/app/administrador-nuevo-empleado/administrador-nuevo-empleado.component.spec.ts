import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorNuevoEmpleadoComponent } from './administrador-nuevo-empleado.component';

describe('AdministradorNuevoEmpleadoComponent', () => {
  let component: AdministradorNuevoEmpleadoComponent;
  let fixture: ComponentFixture<AdministradorNuevoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorNuevoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorNuevoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
