import { TestBed } from '@angular/core/testing';

import { PsychologyEffectService } from './psychology-effect.service';

describe('PsychologyEffectService', () => {
  let service: PsychologyEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsychologyEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
