import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VComputerComponent } from './vcomputer.component';

describe('VComputerComponent', () => {
  let component: VComputerComponent;
  let fixture: ComponentFixture<VComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
