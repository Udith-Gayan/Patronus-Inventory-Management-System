import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View2EmpComponent } from './view2-emp.component';

describe('View2EmpComponent', () => {
  let component: View2EmpComponent;
  let fixture: ComponentFixture<View2EmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View2EmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View2EmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
