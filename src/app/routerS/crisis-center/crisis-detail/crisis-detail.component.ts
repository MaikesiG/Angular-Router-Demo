import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisDetailComponent implements OnInit {
  crisis$:Observable<Crisis>;
  constructor(private route:ActivatedRoute, private crisisServe:CrisisService,
    private router:Router,) { }

  ngOnInit(): void {
    // console.log('this.route.paramMap', this.route.paramMap)
    this.crisis$=this.route.paramMap.pipe(
      switchMap( params=> {
        return this.crisisServe.getCrisis(params.get('id'));
      })
    )
  }
  // back(id:number) {
  //   this.router.navigate(['/heroes',{id}]); //key value一样，es6可以直接写
  // }
}
