import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;
  constructor(
    private crisisServe:CrisisService,
    private router:Router,
    private route:ActivatedRoute,
  ) {}
  ngOnInit(): void {
    // this.selectedId = +this.router.snapshot.paramMap.get('id')
    this.crises$ =  this.crisisServe.getCrises();
    // console.log('this.crises$', this.crises$)
  }
  onSelected(id:number) {
    this.selectedId = id;
    this.router.navigate([id],{relativeTo:this.route});
    //相对导航，用routeLink可以直接写，用navigate要相对于当前路由
  }

}
