import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTorneoBasquetbolComponent } from './editar-torneo-basquetbol.component';

describe('EditarTorneoBasquetbolComponent', () => {
  let component: EditarTorneoBasquetbolComponent;
  let fixture: ComponentFixture<EditarTorneoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTorneoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTorneoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
