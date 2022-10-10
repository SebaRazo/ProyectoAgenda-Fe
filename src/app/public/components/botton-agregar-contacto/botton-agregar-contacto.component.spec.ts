import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonAgregarContactoComponent } from './botton-agregar-contacto.component';

describe('BottonAgregarContactoComponent', () => {
  let component: BottonAgregarContactoComponent;
  let fixture: ComponentFixture<BottonAgregarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonAgregarContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonAgregarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
