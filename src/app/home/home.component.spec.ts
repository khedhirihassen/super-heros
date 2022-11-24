import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesService } from '../heroes.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
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
