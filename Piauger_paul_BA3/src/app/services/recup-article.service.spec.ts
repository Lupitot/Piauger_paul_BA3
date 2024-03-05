import { TestBed } from '@angular/core/testing';

import { RecupArticleService } from './recup-article.service';

describe('RecupArticleService', () => {
  let service: RecupArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
