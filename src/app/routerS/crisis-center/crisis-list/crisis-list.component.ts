import { Component, OnInit } from '@angular/core';
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
  constructor(private crisisServe:CrisisService) {
  }

  ngOnInit(): void {
    this.crises$ =  this.crisisServe.getCrises();
    console.log('this.crises$', this.crises$)
  }
  onSelected(id:number) {
    this.selectedId = id;
  }

}
