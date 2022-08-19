import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsoRegistrationComponent } from './cso-registration.component';

describe('CsoRegistrationComponent', () => {
  let component: CsoRegistrationComponent;
  let fixture: ComponentFixture<CsoRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsoRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsoRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
