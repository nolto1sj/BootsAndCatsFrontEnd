import { TestBed } from '@angular/core/testing';

import { BootsAndCatsBackendService } from './boots-and-cats-backend.service';

describe('BootsAndCatsBackendService', () => {
  let service: BootsAndCatsBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootsAndCatsBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
