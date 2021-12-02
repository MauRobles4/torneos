import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPartidoFutbolComponent } from './editar-partido-futbol.component';

describe('EditarPartidoFutbolComponent', () => {
  let component: EditarPartidoFutbolComponent;
  let fixture: ComponentFixture<EditarPartidoFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPartidoFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPartidoFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
