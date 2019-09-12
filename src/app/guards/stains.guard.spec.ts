import { TestBed, async, inject } from '@angular/core/testing';

import { StainsGuard } from './stains.guard';

describe('StainsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StainsGuard]
    });
  });

  it('should ...', inject([StainsGuard], (guard: StainsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
