import { TestBed } from '@angular/core/testing';

import { Test.ServiceService } from './test.service.service';

describe('Test.ServiceService', () => {
  let service: Test.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Test.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
