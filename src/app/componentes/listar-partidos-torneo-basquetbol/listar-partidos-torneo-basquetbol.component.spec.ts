import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartidosTorneoBasquetbolComponent } from './listar-partidos-torneo-basquetbol.component';

describe('ListarPartidosTorneoBasquetbolComponent', () => {
  let component: ListarPartidosTorneoBasquetbolComponent;
  let fixture: ComponentFixture<ListarPartidosTorneoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPartidosTorneoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPartidosTorneoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
