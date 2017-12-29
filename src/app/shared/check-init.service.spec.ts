import { TestBed, inject } from '@angular/core/testing';

import { CheckInitService } from './check-init.service';

describe('CheckInitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckInitService]
    });
  });

  it('should be created', inject([CheckInitService], (service: CheckInitService) => {
    expect(service).toBeTruthy();
  }));
});
