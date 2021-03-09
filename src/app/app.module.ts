import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CrisisCenterModule } from './routerS/crisis-center/crisis-center.module';
import { HeroesModule } from './routerS/heroes/heroes.module';
import { NotFoundComponent } from './routerS/not-found/not-found.component';
import { ComposeMessageComponent } from './routerS/compose-message/compose-message.component';
// import { AdminModule } from './routerS/admin/admin.module';
import { AuthModule } from './routerS/auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    LayoutComponent,
    NotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesModule,
    // AdminModule, 懒加载 改成异步 一开始进入要删掉
    AuthModule,
    CrisisCenterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
