import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styleUrls: ['./add-heroes.component.css']
})
export class AddHeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
  }

  heros: Hero = {
    nom: '',
    age: 0,
    pouvoir: '',
    citation: '',
    photo: ''
  }

  image = 'hero_img_placeholder.png';

  onFileSelected(event: any) {
    if(event.target.files.length > 0) 
     {
       this.image = event.target.files[0].name;
     }
   }

  saveHeros(): void {
    const data = {
      nom: this.heros.nom,
      age: this.heros.age,
      pouvoir: this.heros.pouvoir,
      citation: this.heros.citation,
      photo: this.image
    };
    this.heroesService.createHeroes(data)
      .subscribe({
        next: (res) => {
          this.router.navigate(['']);
        },
        error: (e) => console.error(e)
      });
  }



}