import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmrBlackComponent } from './emr-black.component';

describe('EmrBlackComponent', () => {
  let component: EmrBlackComponent;
  let fixture: ComponentFixture<EmrBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmrBlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmrBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
