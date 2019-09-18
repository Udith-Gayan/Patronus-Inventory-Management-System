import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleNotificationComponent } from './view-single-notification.component';

describe('ViewSingleNotificationComponent', () => {
  let component: ViewSingleNotificationComponent;
  let fixture: ComponentFixture<ViewSingleNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
