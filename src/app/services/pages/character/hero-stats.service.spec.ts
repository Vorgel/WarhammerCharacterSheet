import { TestBed } from '@angular/core/testing';

import { HeroStatsService } from './hero-stats.service';

describe('HeroStatsService', () => {
  let service: HeroStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
