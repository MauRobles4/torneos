import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTorneoComponent } from './listar-torneo.component';

describe('ListarTorneoComponent', () => {
  let component: ListarTorneoComponent;
  let fixture: ComponentFixture<ListarTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
