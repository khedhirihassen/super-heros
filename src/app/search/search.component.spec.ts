import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesService } from '../heroes.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

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
