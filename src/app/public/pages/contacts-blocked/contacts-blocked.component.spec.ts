import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsBlockedComponent } from './contacts-blocked.component';

describe('ContactsBlockedComponent', () => {
  let component: ContactsBlockedComponent;
  let fixture: ComponentFixture<ContactsBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsBlockedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
