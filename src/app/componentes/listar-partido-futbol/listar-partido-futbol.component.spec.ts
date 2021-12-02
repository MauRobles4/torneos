import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartidoFutbolComponent } from './listar-partido-futbol.component';

describe('ListarPartidoFutbolComponent', () => {
  let component: ListarPartidoFutbolComponent;
  let fixture: ComponentFixture<ListarPartidoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPartidoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPartidoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
