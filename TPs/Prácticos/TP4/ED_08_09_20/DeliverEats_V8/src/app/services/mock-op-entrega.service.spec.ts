import { TestBed } from '@angular/core/testing';

import { MockOpEntregaService } from './mock-op-entrega.service';

describe('MockOpEntregaService', () => {
  let service: MockOpEntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockOpEntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
