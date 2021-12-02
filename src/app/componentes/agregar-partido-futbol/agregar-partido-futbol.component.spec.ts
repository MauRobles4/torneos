import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPartidoFutbolComponent } from './agregar-partido-futbol.component';

describe('AgregarPartidoFutbolComponent', () => {
  let component: AgregarPartidoFutbolComponent;
  let fixture: ComponentFixture<AgregarPartidoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPartidoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPartidoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
