import { TestBed } from '@angular/core/testing';

import { TrelloService } from './trello.service';

describe('TrelloService', () => {
  let service: TrelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
