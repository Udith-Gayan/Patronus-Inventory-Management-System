import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestAndBookingEmpDetailComponent } from './view-request-and-booking-emp-detail.component';

describe('ViewRequestAndBookingEmpDetailComponent', () => {
  let component: ViewRequestAndBookingEmpDetailComponent;
  let fixture: ComponentFixture<ViewRequestAndBookingEmpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestAndBookingEmpDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestAndBookingEmpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
