import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssetModalComponent } from './request-asset-modal.component';

describe('RequestAssetModalComponent', () => {
  let component: RequestAssetModalComponent;
  let fixture: ComponentFixture<RequestAssetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAssetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAssetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
