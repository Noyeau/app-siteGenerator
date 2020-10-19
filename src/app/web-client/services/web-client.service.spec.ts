/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebClientService } from './web-client.service';

describe('Service: WebClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebClientService]
    });
  });

  it('should ...', inject([WebClientService], (service: WebClientService) => {
    expect(service).toBeTruthy();
  }));
});
