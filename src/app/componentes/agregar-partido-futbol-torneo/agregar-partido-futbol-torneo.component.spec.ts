import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPartidoFutbolTorneoComponent } from './agregar-partido-futbol-torneo.component';

describe('AgregarPartidoFutbolTorneoComponent', () => {
  let component: AgregarPartidoFutbolTorneoComponent;
  let fixture: ComponentFixture<AgregarPartidoFutbolTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPartidoFutbolTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPartidoFutbolTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
