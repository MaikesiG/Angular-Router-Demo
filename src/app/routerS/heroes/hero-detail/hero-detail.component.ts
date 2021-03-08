import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private heroServe:HeroService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      // console.log('params', params.get('id'))
      this.heroServe.getHero(params.get('id')).subscribe( hero => {
        console.log('hero', hero)
      })

    })
  }

}
