import { TestBed } from '@angular/core/testing';

import { MockOpcionPagoService } from './mock-opcion-pago.service';

describe('MockOpcionPagoService', () => {
  let service: MockOpcionPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockOpcionPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
