import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPartidoBasquetbolTorneoComponent } from './agregar-partido-basquetbol-torneo.component';

describe('AgregarPartidoBasquetbolTorneoComponent', () => {
  let component: AgregarPartidoBasquetbolTorneoComponent;
  let fixture: ComponentFixture<AgregarPartidoBasquetbolTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPartidoBasquetbolTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPartidoBasquetbolTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
