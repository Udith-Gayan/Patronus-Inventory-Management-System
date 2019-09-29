import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployeeComponent } from './view-all-employee.component';

describe('ViewAllEmployeeComponent', () => {
  let component: ViewAllEmployeeComponent;
  let fixture: ComponentFixture<ViewAllEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
