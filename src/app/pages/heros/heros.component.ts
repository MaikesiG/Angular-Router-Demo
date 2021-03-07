import { Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/type';
import { HeroService } from 'src/app/services/hero.service';
import Heros from '../../configs/hero'
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };
  heros: Hero[] = Heros;
  // heroServe:HeroService;
  constructor(readonly heroServe:HeroService) {
    // this.heroServe = new HeroService()
    this.heros = this.heroServe.getHeros();
    console.log('heroServe', this.heroServe.getHeros())
   }

  ngOnInit(): void {
  }
  search() {
    console.log('this.serachParams:',this.searchParams);
  }

}
