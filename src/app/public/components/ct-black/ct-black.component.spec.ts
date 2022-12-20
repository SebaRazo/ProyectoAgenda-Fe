import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtBlackComponent } from './ct-black.component';

describe('CtBlackComponent', () => {
  let component: CtBlackComponent;
  let fixture: ComponentFixture<CtBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtBlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
