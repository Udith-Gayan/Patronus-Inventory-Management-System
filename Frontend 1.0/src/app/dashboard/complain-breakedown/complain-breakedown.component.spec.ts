import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainBreakedownComponent } from './complain-breakedown.component';

describe('ComplainBreakedownComponent', () => {
  let component: ComplainBreakedownComponent;
  let fixture: ComponentFixture<ComplainBreakedownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainBreakedownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainBreakedownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
