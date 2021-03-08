import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';


const routes: Routes = [
  {
    path:'crisis-center',
    component:CrisisCenterComponent,
    children: [
      {
        path:'list',
        component:CrisisListComponent,
        children:[
          {
            path:'home',
            component:CrisisCenterHomeComponent,
          },
          {
            path:'detail/:id',
            component:CrisisDetailComponent,
          },

        ]
      },
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full',
      }
    ]
   },

];

@NgModule({
  imports: [
  RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
