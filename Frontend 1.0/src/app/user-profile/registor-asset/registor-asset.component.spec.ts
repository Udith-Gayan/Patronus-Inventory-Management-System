import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorAssetComponent } from './registor-asset.component';

describe('RegistorAssetComponent', () => {
  let component: RegistorAssetComponent;
  let fixture: ComponentFixture<RegistorAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistorAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
