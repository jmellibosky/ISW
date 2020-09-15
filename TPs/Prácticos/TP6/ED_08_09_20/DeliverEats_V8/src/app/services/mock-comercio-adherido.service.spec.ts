import { TestBed } from '@angular/core/testing';

import { MockComercioAdheridoService } from './mock-comercio-adherido.service';

describe('MockComercioAdheridoService', () => {
  let service: MockComercioAdheridoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockComercioAdheridoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
