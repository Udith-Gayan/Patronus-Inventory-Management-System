import { TestBed } from '@angular/core/testing';

import { LoginLogoutServService } from './login-logout-serv.service';

describe('LoginLogoutServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginLogoutServService = TestBed.get(LoginLogoutServService);
    expect(service).toBeTruthy();
  });
});
