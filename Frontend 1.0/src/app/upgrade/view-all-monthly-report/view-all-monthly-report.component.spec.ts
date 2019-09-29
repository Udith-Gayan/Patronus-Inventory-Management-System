import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMonthlyReportComponent } from './view-all-monthly-report.component';

describe('ViewAllMonthlyReportComponent', () => {
  let component: ViewAllMonthlyReportComponent;
  let fixture: ComponentFixture<ViewAllMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
