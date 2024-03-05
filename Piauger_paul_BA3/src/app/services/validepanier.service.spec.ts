import { TestBed } from '@angular/core/testing';

import { ValidepanierService } from './validepanier.service';

describe('ValidepanierService', () => {
  let service: ValidepanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidepanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
