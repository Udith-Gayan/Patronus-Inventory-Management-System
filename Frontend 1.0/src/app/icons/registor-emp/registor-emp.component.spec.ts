import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorEmpComponent } from './registor-emp.component';

describe('RegistorEmpComponent', () => {
  let component: RegistorEmpComponent;
  let fixture: ComponentFixture<RegistorEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistorEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
