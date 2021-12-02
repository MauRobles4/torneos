import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEquipoBasquetbolComponent } from './editar-equipo-basquetbol.component';

describe('EditarEquipoBasquetbolComponent', () => {
  let component: EditarEquipoBasquetbolComponent;
  let fixture: ComponentFixture<EditarEquipoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEquipoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEquipoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
