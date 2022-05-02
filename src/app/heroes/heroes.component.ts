import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];

  //this version of getHeroes is asyncronous
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); //this line break is unncecessary. we're doing Observable.subscribe()
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

} 

/*
Previously, the parent HeroesComponent set the HeroDetailComponent.hero property and the 
HeroDetailComponent displayed the hero.

HeroesComponent doesn't do that anymore. Now the router creates the 
HeroDetailComponent in response to a URL such as ~/detail/11.
*/