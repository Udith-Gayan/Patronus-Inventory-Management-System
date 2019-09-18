import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleAssetNotiComponent } from './view-single-asset-noti.component';

describe('ViewSingleAssetNotiComponent', () => {
  let component: ViewSingleAssetNotiComponent;
  let fixture: ComponentFixture<ViewSingleAssetNotiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSingleAssetNotiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleAssetNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
