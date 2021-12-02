import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPartidoBasquetbolComponent } from './agregar-partido-basquetbol.component';

describe('AgregarPartidoBasquetbolComponent', () => {
  let component: AgregarPartidoBasquetbolComponent;
  let fixture: ComponentFixture<AgregarPartidoBasquetbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPartidoBasquetbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPartidoBasquetbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
