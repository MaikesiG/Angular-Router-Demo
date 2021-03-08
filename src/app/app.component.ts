import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heros';
  constructor(private router:Router){}
  toCrisisCenter() {
    this.router.navigateByUrl('/crisis-center')//必须绝对路径
    // this.router.navigate(['./crisis-center']) //里面是数组 可以是相对路径
  }
  toHeroes() {
    this.router.navigateByUrl('/heroes')//必须绝对路径
    // this.router.navigate(['./heroes']) //里面是数组  可以是相对路径
  }
};
