import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestshowComponent } from './testshow.component';

describe('TestshowComponent', () => {
  let component: TestshowComponent;
  let fixture: ComponentFixture<TestshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
