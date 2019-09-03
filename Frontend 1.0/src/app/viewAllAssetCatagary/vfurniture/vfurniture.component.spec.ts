import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VFurnitureComponent } from './vfurniture.component';

describe('VFurnitureComponent', () => {
  let component: VFurnitureComponent;
  let fixture: ComponentFixture<VFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
