import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorNueevoAdministradorComponent } from './administrador-nueevo-administrador.component';

describe('AdministradorNueevoAdministradorComponent', () => {
  let component: AdministradorNueevoAdministradorComponent;
  let fixture: ComponentFixture<AdministradorNueevoAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorNueevoAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorNueevoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
