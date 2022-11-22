import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  jsonDbUrl = 'http://localhost:3000/hero';

  getHeroes (): Observable<any[]> {
    return this.http.get<any[]>(this.jsonDbUrl);
  }

  createHeroes(data: any): Observable<any> {
    return this.http.post(this.jsonDbUrl, data);
  }




}
