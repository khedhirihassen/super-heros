import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() hero: Hero = {
    nom: '',
    age: 0,
    citation: '',
    pouvoir: '',
    photo: ''
  };

  constructor(private heroesService: HeroesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      //this.message = '';
      this.getHero(this.route.snapshot.params["id"]);
    }
  }

  getHero(id: string): void {
    this.heroesService.get(id)
      .subscribe({
        next: (data) => {
          this.hero = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  

}
