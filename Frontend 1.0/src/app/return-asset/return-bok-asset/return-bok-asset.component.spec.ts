import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBokAssetComponent } from './return-bok-asset.component';

describe('ReturnBokAssetComponent', () => {
  let component: ReturnBokAssetComponent;
  let fixture: ComponentFixture<ReturnBokAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnBokAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnBokAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
