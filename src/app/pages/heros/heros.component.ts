import { Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/type';
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
  constructor() { }

  ngOnInit(): void {
  }
  search() {
    console.log('this.serachParams:',this.searchParams);
  }

}
