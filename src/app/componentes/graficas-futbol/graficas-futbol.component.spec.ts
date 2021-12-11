import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasFutbolComponent } from './graficas-futbol.component';

describe('GraficasFutbolComponent', () => {
  let component: GraficasFutbolComponent;
  let fixture: ComponentFixture<GraficasFutbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficasFutbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
