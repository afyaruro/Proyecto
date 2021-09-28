import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosEmpleadosComponent } from './pagos-empleados.component';

describe('PagosEmpleadosComponent', () => {
  let component: PagosEmpleadosComponent;
  let fixture: ComponentFixture<PagosEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
