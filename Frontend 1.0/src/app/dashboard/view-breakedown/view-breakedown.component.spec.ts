import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBreakedownComponent } from './view-breakedown.component';

describe('ViewBreakedownComponent', () => {
  let component: ViewBreakedownComponent;
  let fixture: ComponentFixture<ViewBreakedownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBreakedownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBreakedownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
