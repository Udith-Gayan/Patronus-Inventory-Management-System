import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecterComponent } from './projecter.component';

describe('ProjecterComponent', () => {
  let component: ProjecterComponent;
  let fixture: ComponentFixture<ProjecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
