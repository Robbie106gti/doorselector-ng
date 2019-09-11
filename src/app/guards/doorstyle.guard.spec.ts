import { TestBed, async, inject } from '@angular/core/testing';

import { DoorstyleGuard } from './doorstyle.guard';

describe('DoorstyleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoorstyleGuard]
    });
  });

  it('should ...', inject([DoorstyleGuard], (guard: DoorstyleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
