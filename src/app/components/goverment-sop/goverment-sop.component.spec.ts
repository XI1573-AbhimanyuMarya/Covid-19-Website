import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentSOPComponent } from './goverment-sop.component';

describe('GovermentSOPComponent', () => {
  let component: GovermentSOPComponent;
  let fixture: ComponentFixture<GovermentSOPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovermentSOPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovermentSOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
