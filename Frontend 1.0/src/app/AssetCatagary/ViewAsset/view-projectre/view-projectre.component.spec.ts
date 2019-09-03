import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectreComponent } from './view-projectre.component';

describe('ViewProjectreComponent', () => {
  let component: ViewProjectreComponent;
  let fixture: ComponentFixture<ViewProjectreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjectreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
