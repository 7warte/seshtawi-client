import { TestBed } from '@angular/core/testing';
import { BackgroundAnimationsService } from './background-animations.service';



describe('BackgroundAnimationsService', () => {
  let service: BackgroundAnimationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundAnimationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
