import { TestBed } from '@angular/core/testing';

import { ViewdocsService } from './viewdocs.service';

describe('ViewdocsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewdocsService = TestBed.get(ViewdocsService);
    expect(service).toBeTruthy();
  });
});
