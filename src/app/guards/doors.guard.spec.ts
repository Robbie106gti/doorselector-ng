import { TestBed, async, inject } from '@angular/core/testing';

import { DoorsGuard } from './doors.guard';

describe('DoorsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorsGuard]
    });
  });

  it('should ...', inject([DoorsGuard], (guard: DoorsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
