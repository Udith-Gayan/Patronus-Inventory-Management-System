import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestAssetComponent } from './view-request-asset.component';

describe('ViewRequestAssetComponent', () => {
  let component: ViewRequestAssetComponent;
  let fixture: ComponentFixture<ViewRequestAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
