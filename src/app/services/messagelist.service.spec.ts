import { TestBed } from '@angular/core/testing';

import { MessagelistService } from './messagelist.service';

describe('MessagelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagelistService = TestBed.get(MessagelistService);
    expect(service).toBeTruthy();
  });
});
