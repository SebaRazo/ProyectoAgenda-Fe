import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonLoginComponent } from './botton-login.component';

describe('BottonLoginComponent', () => {
  let component: BottonLoginComponent;
  let fixture: ComponentFixture<BottonLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
