import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarListaNegraComponent } from './agregar-lista-negra.component';

describe('AgregarListaNegraComponent', () => {
  let component: AgregarListaNegraComponent;
  let fixture: ComponentFixture<AgregarListaNegraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarListaNegraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarListaNegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
