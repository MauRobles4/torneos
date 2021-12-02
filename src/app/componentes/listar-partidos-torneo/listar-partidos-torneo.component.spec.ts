import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartidosTorneoComponent } from './listar-partidos-torneo.component';

describe('ListarPartidosTorneoComponent', () => {
  let component: ListarPartidosTorneoComponent;
  let fixture: ComponentFixture<ListarPartidosTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPartidosTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPartidosTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
