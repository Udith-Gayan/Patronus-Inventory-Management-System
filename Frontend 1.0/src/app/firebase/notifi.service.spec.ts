import { TestBed } from '@angular/core/testing';

import { NotifiService } from './notifi.service';

describe('NotifiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifiService = TestBed.get(NotifiService);
    expect(service).toBeTruthy();
  });
});
