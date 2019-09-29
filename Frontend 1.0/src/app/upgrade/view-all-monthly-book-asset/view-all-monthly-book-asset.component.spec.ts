import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMonthlyBookAssetComponent } from './view-all-monthly-book-asset.component';

describe('ViewAllMonthlyBookAssetComponent', () => {
  let component: ViewAllMonthlyBookAssetComponent;
  let fixture: ComponentFixture<ViewAllMonthlyBookAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllMonthlyBookAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMonthlyBookAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
