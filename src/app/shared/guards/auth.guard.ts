import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private router: Router, private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /*
    check whether the user is auth or not 
    if yes 
      return true 
    or else 
      redirect to login page 
      return false */

    if(this.authService.isAuthenticated()){
      return true;
    }else{
      // state.url will have what url the user wants to access
      this.router.navigate(['login'], {queryParams: { redirectTo:state.url}});
      return false;
    }

  }
  
}
