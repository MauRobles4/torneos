import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquipoFutbolComponent } from './listar-equipo-futbol.component';

describe('ListarEquipoFutbolComponent', () => {
  let component: ListarEquipoFutbolComponent;
  let fixture: ComponentFixture<ListarEquipoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEquipoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEquipoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
