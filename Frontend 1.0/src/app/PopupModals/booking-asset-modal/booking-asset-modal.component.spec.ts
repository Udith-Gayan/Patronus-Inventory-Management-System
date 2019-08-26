import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAssetModalComponent } from './booking-asset-modal.component';

describe('BookingAssetModalComponent', () => {
  let component: BookingAssetModalComponent;
  let fixture: ComponentFixture<BookingAssetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingAssetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAssetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
