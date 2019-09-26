import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBreakeDownAssetComponent } from './view-breake-down-asset.component';

describe('ViewBreakeDownAssetComponent', () => {
  let component: ViewBreakeDownAssetComponent;
  let fixture: ComponentFixture<ViewBreakeDownAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBreakeDownAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBreakeDownAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
