import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleEmpNotiComponent } from './view-single-emp-noti.component';

describe('ViewSingleEmpNotiComponent', () => {
  let component: ViewSingleEmpNotiComponent;
  let fixture: ComponentFixture<ViewSingleEmpNotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleEmpNotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleEmpNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
