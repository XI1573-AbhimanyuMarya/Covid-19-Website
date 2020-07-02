import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XebiaGuidelinesComponent } from './xebia-guidelines.component';

describe('XebiaGuidelinesComponent', () => {
  let component: XebiaGuidelinesComponent;
  let fixture: ComponentFixture<XebiaGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XebiaGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XebiaGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
