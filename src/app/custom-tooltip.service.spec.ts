import { TestBed } from '@angular/core/testing';

import { CustomTooltipService } from './custom-tooltip.service';

describe('CustomTooltipService', () => {
  let service: CustomTooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
