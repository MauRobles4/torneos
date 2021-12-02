import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquipoBasquetbolComponent } from './listar-equipo-basquetbol.component';

describe('ListarEquipoBasquetbolComponent', () => {
  let component: ListarEquipoBasquetbolComponent;
  let fixture: ComponentFixture<ListarEquipoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEquipoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEquipoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
