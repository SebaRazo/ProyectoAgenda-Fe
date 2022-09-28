import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeLlamadasComponent } from './registro-de-llamadas.component';

describe('RegistroDeLlamadasComponent', () => {
  let component: RegistroDeLlamadasComponent;
  let fixture: ComponentFixture<RegistroDeLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDeLlamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
