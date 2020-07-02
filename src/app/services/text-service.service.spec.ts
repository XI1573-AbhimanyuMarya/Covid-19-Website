import { TestBed } from '@angular/core/testing';

import { TextServiceService } from './text-service.service';

describe('TextServiceService', () => {
  let service: TextServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
