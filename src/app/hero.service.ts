import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }
}
