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

  it('getAll should make a GET HTTP request and return all data items', () => {
    service.getHeroes().subscribe(res => {
      expect(res.length).toEqual(24);
     });
   });

   it('getById should make a GET HTTP request with id appended to end of url', () => {
    service.get(1).subscribe(res => {
      expect(res.nom).toEqual('Genji'); 
     }); 
   });

   /*
   it('create should make a POST HTTP request with resource as body', () => {
    const createObj = { nom: "TestName",
      age: 26,
      pouvoir: "pouvoir test",
      citation: "citation test" 
    };
    service.createHeroes(createObj).subscribe(res => {
      expect(res.nom).toBe('TestName'); 
     }); 
    });
*/

});
