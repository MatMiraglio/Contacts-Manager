import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProfilePicComponent } from './contact-profile-pic.component';

describe('ContactProfilePicComponent', () => {
  let component: ContactProfilePicComponent;
  let fixture: ComponentFixture<ContactProfilePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactProfilePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
