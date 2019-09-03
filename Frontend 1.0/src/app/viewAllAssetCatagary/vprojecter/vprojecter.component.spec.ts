import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VProjecterComponent } from './vprojecter.component';

describe('VProjecterComponent', () => {
  let component: VProjecterComponent;
  let fixture: ComponentFixture<VProjecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VProjecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VProjecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
