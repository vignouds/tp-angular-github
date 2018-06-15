import { TestBed, inject } from '@angular/core/testing';

import { RepositoryResolverService } from './repository-resolver.service';

describe('RepositoryResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryResolverService]
    });
  });

  it('should be created', inject([RepositoryResolverService], (service: RepositoryResolverService) => {
    expect(service).toBeTruthy();
  }));
});
