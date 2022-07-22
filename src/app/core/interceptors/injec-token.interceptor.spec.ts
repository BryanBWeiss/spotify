import { TestBed } from '@angular/core/testing';

import { InjecTokenInterceptor } from './injec-token.interceptor';

describe('InjecTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjecTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjecTokenInterceptor = TestBed.inject(InjecTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
