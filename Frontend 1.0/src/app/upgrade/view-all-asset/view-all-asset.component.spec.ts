import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAssetComponent } from './view-all-asset.component';

describe('ViewAllAssetComponent', () => {
  let component: ViewAllAssetComponent;
  let fixture: ComponentFixture<ViewAllAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
