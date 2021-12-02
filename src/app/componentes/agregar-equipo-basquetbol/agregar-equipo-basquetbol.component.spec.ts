import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEquipoBasquetbolComponent } from './agregar-equipo-basquetbol.component';

describe('AgregarEquipoBasquetbolComponent', () => {
  let component: AgregarEquipoBasquetbolComponent;
  let fixture: ComponentFixture<AgregarEquipoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEquipoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEquipoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
