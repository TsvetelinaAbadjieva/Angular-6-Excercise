import { TestBed, inject } from '@angular/core/testing';

import { Date.ValidatorService } from './date.validator.service';

describe('Date.ValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Date.ValidatorService]
    });
  });

  it('should be created', inject([Date.ValidatorService], (service: Date.ValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
