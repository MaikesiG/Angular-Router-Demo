import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  constructor(
    private heroServe:HeroService,
    private router:Router,
    private route:ActivatedRoute,

    ) {
    // console.log('this.heroServe.getHeroes()', this.heroServe.getHeroes())
  }

  // ngOnInit(): void {
  //   this.heroes$ =  this.route.paramMap.pipe(
  //     switchMap( params => {
  //     this.selectedId = +params.get('id');
  //     // console.log('params', params);
  //     return this.heroServe.getHeroes();
  //   }))
  //   // this.heroServe.getHeroes();
  //   // console.log('this.heroes$', this.heroes$)
  // }

  //snapshot写法
  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.paramMap.get('id');
    this.heroes$ = this.heroServe.getHeroes();
  }
  onSelected(id:number) {
    this.selectedId = id;
    // this.router.navigateByUrl('/hero/' + id);
    // this.router.navigate(['/hero/' + id]);
    this.router.navigate(['/hero',id]); //不加斜杠也行，后面可以无限接参数,自动补全斜杠
  }

}
