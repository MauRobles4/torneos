import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartidoBasquetbolComponent } from './listar-partido-basquetbol.component';

describe('ListarPartidoBasquetbolComponent', () => {
  let component: ListarPartidoBasquetbolComponent;
  let fixture: ComponentFixture<ListarPartidoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPartidoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPartidoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
