import { TestBed } from '@angular/core/testing';

import { CorporateAccountApiServiceService } from './corporate-account-api-service.service';

describe('CorporateAccountApiServiceService', () => {
  let service: CorporateAccountApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateAccountApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
