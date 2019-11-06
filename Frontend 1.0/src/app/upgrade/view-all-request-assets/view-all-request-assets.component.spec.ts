import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRequestAssetsComponent } from './view-all-request-assets.component';

describe('ViewAllRequestAssetsComponent', () => {
  let component: ViewAllRequestAssetsComponent;
  let fixture: ComponentFixture<ViewAllRequestAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllRequestAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRequestAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
