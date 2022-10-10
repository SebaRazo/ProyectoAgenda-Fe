import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonRegistroComponent } from './botton-registro.component';

describe('BottonRegistroComponent', () => {
  let component: BottonRegistroComponent;
  let fixture: ComponentFixture<BottonRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
