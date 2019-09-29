import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMonthlyBrakeDownAssetComponent } from './view-all-monthly-brake-down-asset.component';

describe('ViewAllMonthlyBrakeDownAssetComponent', () => {
  let component: ViewAllMonthlyBrakeDownAssetComponent;
  let fixture: ComponentFixture<ViewAllMonthlyBrakeDownAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllMonthlyBrakeDownAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMonthlyBrakeDownAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
