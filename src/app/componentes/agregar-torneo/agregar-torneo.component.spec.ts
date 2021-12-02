import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTorneoComponent } from './agregar-torneo.component';

describe('AgregarTorneoComponent', () => {
  let component: AgregarTorneoComponent;
  let fixture: ComponentFixture<AgregarTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
