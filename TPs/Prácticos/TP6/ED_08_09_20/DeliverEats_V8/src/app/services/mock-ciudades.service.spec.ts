import { TestBed } from '@angular/core/testing';

import { MockCiudadesService } from './mock-ciudades.service';

describe('MockCiudadesService', () => {
  let service: MockCiudadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCiudadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
