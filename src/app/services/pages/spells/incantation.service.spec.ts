import { TestBed } from '@angular/core/testing';

import { IncantationService } from './incantation.service';

describe('IncantationService', () => {
  let service: IncantationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncantationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
