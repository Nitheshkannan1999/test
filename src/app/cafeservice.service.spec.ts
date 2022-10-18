import { TestBed } from '@angular/core/testing';

import { CafeserviceService } from './cafeservice.service';

describe('CafeserviceService', () => {
  let service: CafeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
