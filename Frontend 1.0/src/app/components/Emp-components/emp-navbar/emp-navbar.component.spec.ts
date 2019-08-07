import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNavbarComponent } from './emp-navbar.component';

describe('EmpNavbarComponent', () => {
  let component: EmpNavbarComponent;
  let fixture: ComponentFixture<EmpNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
