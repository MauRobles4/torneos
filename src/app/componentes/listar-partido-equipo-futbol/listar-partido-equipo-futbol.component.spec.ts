import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartidoEquipoFutbolComponent } from './listar-partido-equipo-futbol.component';

describe('ListarPartidoEquipoFutbolComponent', () => {
  let component: ListarPartidoEquipoFutbolComponent;
  let fixture: ComponentFixture<ListarPartidoEquipoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPartidoEquipoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPartidoEquipoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
