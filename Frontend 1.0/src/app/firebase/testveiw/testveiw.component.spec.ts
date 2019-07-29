import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestveiwComponent } from './testveiw.component';

describe('TestveiwComponent', () => {
  let component: TestveiwComponent;
  let fixture: ComponentFixture<TestveiwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestveiwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestveiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
