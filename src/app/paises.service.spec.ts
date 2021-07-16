import { TestBed } from '@angular/core/testing';

import { paisesService } from './paises.service';

describe('InfopaisService', () => {
  let service: paisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(paisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
