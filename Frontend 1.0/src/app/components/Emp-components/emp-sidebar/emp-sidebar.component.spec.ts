import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSidebarComponent } from './emp-sidebar.component';

describe('EmpSidebarComponent', () => {
  let component: EmpSidebarComponent;
  let fixture: ComponentFixture<EmpSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
