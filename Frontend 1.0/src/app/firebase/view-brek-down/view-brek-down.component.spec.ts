import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBrekDownComponent } from './view-brek-down.component';

describe('ViewBrekDownComponent', () => {
  let component: ViewBrekDownComponent;
  let fixture: ComponentFixture<ViewBrekDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBrekDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBrekDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
