import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesService } from '../heroes.service';

import { AddHeroesComponent } from './add-heroes.component';

describe('AddHeroesComponent', () => {
  let component: AddHeroesComponent;
  let fixture: ComponentFixture<AddHeroesComponent>;

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
