import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfireDialogComponent } from './confire-dialog.component';

describe('ConfireDialogComponent', () => {
  let component: ConfireDialogComponent;
  let fixture: ComponentFixture<ConfireDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfireDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfireDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
