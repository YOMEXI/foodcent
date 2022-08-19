import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalProjectDirectoryComponent } from './national-project-directory.component';

describe('NationalProjectDirectoryComponent', () => {
  let component: NationalProjectDirectoryComponent;
  let fixture: ComponentFixture<NationalProjectDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalProjectDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalProjectDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
