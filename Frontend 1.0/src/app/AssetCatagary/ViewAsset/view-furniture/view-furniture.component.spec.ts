import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFurnitureComponent } from './view-furniture.component';

describe('ViewFurnitureComponent', () => {
  let component: ViewFurnitureComponent;
  let fixture: ComponentFixture<ViewFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
