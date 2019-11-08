import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestAssetComponent } from './return-request-asset.component';

describe('ReturnRequestAssetComponent', () => {
  let component: ReturnRequestAssetComponent;
  let fixture: ComponentFixture<ReturnRequestAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnRequestAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
