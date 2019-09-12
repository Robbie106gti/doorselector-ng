import { TestBed, async, inject } from '@angular/core/testing';

import { ColorsGuard } from './colors.guard';

describe('ColorsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorsGuard]
    });
  });

  it('should ...', inject([ColorsGuard], (guard: ColorsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
