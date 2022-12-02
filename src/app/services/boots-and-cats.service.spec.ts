import { TestBed } from '@angular/core/testing';

import { BootsAndCatsService } from './boots-and-cats.service';

describe('BootsAndCatsService', () => {
  let service: BootsAndCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootsAndCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
