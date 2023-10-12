import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private userService: UserService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      
      if (this.userService.checkLocalStorage()) {
        return true;
      }
      if (this.userService.isUserLoggedIn) {
        return true;
      }


    this.userService.returnUrl = route.url[0].path;

    this.router.navigate(['login']);
      //kullanıcı login olmuş ise:
         //-> Gideceği sayfayı aç
         //-> Login'e git
    return false;
  }
  
}
