import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAssetComponent } from './book-asset.component';

describe('BookAssetComponent', () => {
  let component: BookAssetComponent;
  let fixture: ComponentFixture<BookAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
