import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingNotificationComponent } from './view-booking-notification.component';

describe('ViewBookingNotificationComponent', () => {
  let component: ViewBookingNotificationComponent;
  let fixture: ComponentFixture<ViewBookingNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookingNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
