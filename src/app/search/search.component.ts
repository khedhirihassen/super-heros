import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public heroes: Hero[] = [];
  public listeHeros: Hero[] = [];
  name = '';

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroesService.getHeroes().subscribe(
      (response: Hero[]) => {
        this.heroes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  search(value: string): void {
    this.listeHeros = this.heroes.filter((val) =>
      val.nom?.toLowerCase().includes(value)
    );
    this.heroes = this.listeHeros;
    if (this.listeHeros.length === 0 || !value) {
      this.getHeroes();
    }
  }

}
