import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-manage-heroes',
  templateUrl: './manage-heroes.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
