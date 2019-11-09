import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnAssetComponent } from './own-asset.component';

describe('OwnAssetComponent', () => {
  let component: OwnAssetComponent;
  let fixture: ComponentFixture<OwnAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
