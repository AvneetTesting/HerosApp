import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from './mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes=HEROES;
  selectedHero!:Hero;

  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
  }
  onSelect(hero:Hero){
    this.selectedHero=hero;
    console.log(this.selectedHero)
  }

}
