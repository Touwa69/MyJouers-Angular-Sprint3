import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { jouerGuard } from './jouer.guard';

describe('jouerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => jouerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
