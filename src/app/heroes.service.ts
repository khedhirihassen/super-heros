import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes (): Observable<any[]> {
    return this.http.get<any[]>('../../assets/json/BDD_Hero.json');
    }




}
