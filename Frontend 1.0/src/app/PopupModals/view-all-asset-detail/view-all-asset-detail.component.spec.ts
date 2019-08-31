import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAssetDetailComponent } from './view-all-asset-detail.component';

describe('ViewAllAssetDetailComponent', () => {
  let component: ViewAllAssetDetailComponent;
  let fixture: ComponentFixture<ViewAllAssetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllAssetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAssetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
