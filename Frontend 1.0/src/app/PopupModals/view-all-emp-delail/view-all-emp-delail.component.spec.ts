import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmpDelailComponent } from './view-all-emp-delail.component';

describe('ViewAllEmpDelailComponent', () => {
  let component: ViewAllEmpDelailComponent;
  let fixture: ComponentFixture<ViewAllEmpDelailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllEmpDelailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEmpDelailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
