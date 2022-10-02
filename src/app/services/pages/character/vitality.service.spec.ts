import { TestBed } from '@angular/core/testing';

import { VitalityService } from './vitality.service';

describe('VitalityService', () => {
  let service: VitalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VitalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
