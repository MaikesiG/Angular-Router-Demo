import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegment, Route, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const url = `${route.path}`;
    console.log('canload url', url);
    console.log('canload segments', segments);
    return this.checkLogin(url);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean| UrlTree {
    const url = state.url;
    console.log('canActivate', url);
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree{
    console.log('canActivateChild');
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Redirect to the login page
    this.router.navigate(['/login'], {
      queryParams: { session_id: 1234567, name: '张三' },
      fragment: 'anchor'
    });
    return false;
  }
}
