import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'; //message service is injected here, this is injected to heroescomponent


@Injectable({
  providedIn: 'root' //creates single shared instance (static) at root that can inject into any class
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('heroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
