/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignalsService } from './signals.service';

describe('Service: Signals', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalsService]
    });
  });

  it('should ...', inject([SignalsService], (service: SignalsService) => {
    expect(service).toBeTruthy();
  }));
});
