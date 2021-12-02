import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTorneoBasquetbolComponent } from './listar-torneo-basquetbol.component';

describe('ListarTorneoBasquetbolComponent', () => {
  let component: ListarTorneoBasquetbolComponent;
  let fixture: ComponentFixture<ListarTorneoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTorneoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTorneoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
