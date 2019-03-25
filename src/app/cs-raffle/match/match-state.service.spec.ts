import { TestBed } from '@angular/core/testing';

import { MatchStateService } from './match-state.service';

describe('MatchStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchStateService = TestBed.get(MatchStateService);
    expect(service).toBeTruthy();
  });
});
