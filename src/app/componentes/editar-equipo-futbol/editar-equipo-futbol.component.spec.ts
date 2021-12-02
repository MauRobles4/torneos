import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEquipoFutbolComponent } from './editar-equipo-futbol.component';

describe('EditarEquipoFutbolComponent', () => {
  let component: EditarEquipoFutbolComponent;
  let fixture: ComponentFixture<EditarEquipoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEquipoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEquipoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
