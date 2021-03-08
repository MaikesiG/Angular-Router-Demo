import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {
  hero$:Observable<Hero>;
  constructor(private route:ActivatedRoute, private heroServe:HeroService,
    private router:Router,) { }

  ngOnInit(): void {
    // console.log('this.route.paramMap', this.route.paramMap)
    this.hero$=this.route.paramMap.pipe(
      switchMap( params=> {
        return this.heroServe.getHero(params.get('id'));
      })
    )
  }
  back(id:number) {
    this.router.navigate(['/heroes',{id}]); //key value一样，es6可以直接写
  }
}
