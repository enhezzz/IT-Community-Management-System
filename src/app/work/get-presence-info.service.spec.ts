import { TestBed, inject } from '@angular/core/testing';

import { GetPresenceInfoService } from './get-presence-info.service';

describe('GetPresenceInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPresenceInfoService]
    });
  });

  it('should be created', inject([GetPresenceInfoService], (service: GetPresenceInfoService) => {
    expect(service).toBeTruthy();
  }));
});
