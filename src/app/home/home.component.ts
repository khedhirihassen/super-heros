import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listeHeros: any[] = [];

  constructor(private heroesService: HeroesService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroesService.getHeroes().subscribe(
      (response: any[]) => {
        this.listeHeros = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
