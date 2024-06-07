import { TestBed } from '@angular/core/testing';

import { TabNaviguationService } from './tab-naviguation.service';

describe('TabNaviguationService', () => {
  let service: TabNaviguationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabNaviguationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
