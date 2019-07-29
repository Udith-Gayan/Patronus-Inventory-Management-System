import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLayoutComponent } from './emp-layout.component';

describe('EmpLayoutComponent', () => {
  let component: EmpLayoutComponent;
  let fixture: ComponentFixture<EmpLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
