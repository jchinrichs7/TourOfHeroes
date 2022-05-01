import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'; //message service is injected here, this is injected to heroescomponent
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //creates single shared instance (static) at root that can inject into any class
})
export class HeroService {

  private heroesUrl = 'api/heroes'; //URL to web api

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes',[]))
      );
  }

  private handleError<T>(operation = 'operation', result? :T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);

    }
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient

    ) { }
}
