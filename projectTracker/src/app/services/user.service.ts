import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isUserLoggedIn: boolean = false;
  returnUrl: string;

  validateUser(userName: string, password: string) {
    if (userName === "admin" && password === "123") {
      this.isUserLoggedIn = true;
      localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
      localStorage.setItem('isLogged', 'yes');
    }
  }

  validateUserToken(token: UserToken): boolean {
    if (token.name === "admin" && token.pass === "123") {
      this.isUserLoggedIn = true;
      localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
      localStorage.setItem('isLogged', 'yes');
      return true;
    }

    return false;
  }

  checkLocalStorage(): boolean {
    let value = localStorage.getItem('isLogged');
    return value == "yes";
  }
}


export const canActivateUser: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    return inject(UserService).validateUserToken(inject(UserToken));  }

Injectable()
class UserToken {
  constructor(public name?: string, public pass?: string) { }
}
