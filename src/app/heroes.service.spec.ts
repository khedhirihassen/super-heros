import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { HeroesService } from './heroes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('HeroesService', () => {

  const jsonPath = 'http://localhost:3000/hero';
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

  it('get all heroes in json file', () => {
    service.getHeroes().subscribe(res => {
      expect(res.length).toEqual(24);
     });
   });

   it('get By Id Hero', () => {
    service.get(1).subscribe(res => {
      expect(res.nom).toEqual('Genji'); 
     }); 
   });
   
   it('Creer un hero', () => {
    const createObj = { nom: "TestName",
      age: 26,
      pouvoir: "pouvoir test",
      citation: "citation test" 
    };
    service.createHeroes(createObj).subscribe(res => {
      expect(res.nom).toBe('TestName'); 
     }); 
    });


});
