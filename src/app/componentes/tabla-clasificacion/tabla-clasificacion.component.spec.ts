import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClasificacionComponent } from './tabla-clasificacion.component';

describe('TablaClasificacionComponent', () => {
  let component: TablaClasificacionComponent;
  let fixture: ComponentFixture<TablaClasificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaClasificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
