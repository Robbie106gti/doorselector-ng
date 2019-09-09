import { TestBed, async, inject } from '@angular/core/testing';

import { MatGuard } from './mat.guard';

describe('MatGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatGuard]
    });
  });

  it('should ...', inject([MatGuard], (guard: MatGuard) => {
    expect(guard).toBeTruthy();
  }));
});
