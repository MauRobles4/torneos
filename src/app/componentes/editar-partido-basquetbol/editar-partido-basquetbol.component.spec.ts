import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPartidoBasquetbolComponent } from './editar-partido-basquetbol.component';

describe('EditarPartidoBasquetbolComponent', () => {
  let component: EditarPartidoBasquetbolComponent;
  let fixture: ComponentFixture<EditarPartidoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPartidoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPartidoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
