import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquiposTorneoComponent } from './listar-equipos-torneo.component';

describe('ListarEquiposTorneoComponent', () => {
  let component: ListarEquiposTorneoComponent;
  let fixture: ComponentFixture<ListarEquiposTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEquiposTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEquiposTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
