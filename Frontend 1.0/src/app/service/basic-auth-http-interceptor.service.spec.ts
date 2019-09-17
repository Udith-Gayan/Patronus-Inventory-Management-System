import { TestBed } from '@angular/core/testing';

import { BasicAuthHttpInterceptorService } from './basic-auth-http-interceptor.service';

describe('BasicAuthHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHttpInterceptorService = TestBed.get(BasicAuthHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
