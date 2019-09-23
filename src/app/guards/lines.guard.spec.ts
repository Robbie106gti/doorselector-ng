import { TestBed, async, inject } from '@angular/core/testing';

import { LinesGuard } from './lines.guard';

describe('LinesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinesGuard]
    });
  });

  it('should ...', inject([LinesGuard], (guard: LinesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
