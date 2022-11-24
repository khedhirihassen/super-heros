import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesService } from '../heroes.service';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  let service: HeroesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HeroesService]
      }).compileComponents();
  
      service = TestBed.inject(HeroesService);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
