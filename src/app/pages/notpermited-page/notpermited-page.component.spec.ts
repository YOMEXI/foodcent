import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotpermitedPageComponent } from './notpermited-page.component';

describe('NotpermitedPageComponent', () => {
  let component: NotpermitedPageComponent;
  let fixture: ComponentFixture<NotpermitedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotpermitedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotpermitedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
