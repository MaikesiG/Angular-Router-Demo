import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-crisis-center',
  template: `
    <div class="crisis-center">
      <h2>Crisis center</h2>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
