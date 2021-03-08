import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './routerS/crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './routerS/heroes/hero-list/hero-list.component';
import { NotFoundComponent } from './routerS/not-found/not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/heroes',pathMatch:'full'},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
     enableTracing:true,
     onSameUrlNavigation:'reload',
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
