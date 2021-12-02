import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquiposTorneoBasquetbolComponent } from './listar-equipos-torneo-basquetbol.component';

describe('ListarEquiposTorneoBasquetbolComponent', () => {
  let component: ListarEquiposTorneoBasquetbolComponent;
  let fixture: ComponentFixture<ListarEquiposTorneoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEquiposTorneoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEquiposTorneoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
