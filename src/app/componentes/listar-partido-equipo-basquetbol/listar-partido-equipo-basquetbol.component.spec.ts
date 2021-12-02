import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartidoEquipoBasquetbolComponent } from './listar-partido-equipo-basquetbol.component';

describe('ListarPartidoEquipoBasquetbolComponent', () => {
  let component: ListarPartidoEquipoBasquetbolComponent;
  let fixture: ComponentFixture<ListarPartidoEquipoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPartidoEquipoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPartidoEquipoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
