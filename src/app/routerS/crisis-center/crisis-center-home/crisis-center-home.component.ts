import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-crisis-center-home',
  template: `
    <h4>Crisis Home</h4>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisCenterHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
