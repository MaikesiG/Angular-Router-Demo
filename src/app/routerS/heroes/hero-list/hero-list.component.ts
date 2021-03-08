import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;
  constructor(private heroServe:HeroService, private router:Router) {
    // console.log('this.heroServe.getHeroes()', this.heroServe.getHeroes())
  }

  ngOnInit(): void {
    this.heroes$ =  this.heroServe.getHeroes();
    console.log('this.heroes$', this.heroes$)
  }
  onSelected(id:number) {
    this.selectedId = id;
    // this.router.navigateByUrl('/hero/' + id);
    this.router.navigate(['/hero/' + id]);
    this.router.navigate(['/hero',id]);
  }

}
