import { TestBed } from '@angular/core/testing';

import { MockProductosService } from './mock-productos.service';

describe('MockProductosService', () => {
  let service: MockProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
