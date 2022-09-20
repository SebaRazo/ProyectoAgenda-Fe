import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContactosComponent } from './agregar-contactos.component';

describe('AgregarContactosComponent', () => {
  let component: AgregarContactosComponent;
  let fixture: ComponentFixture<AgregarContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
