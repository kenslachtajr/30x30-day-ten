import { TestBed } from '@angular/core/testing';

import { AuthTokenInterceptorService } from './auth-token-interceptor.service';

describe('AuthTokenIntercepterService', () => {
  let service: AuthTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});