import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {

  constructor(private userService: UserService){

  }
   
   logOut(){
      this.userService.isUserLoggedIn = false;
      localStorage.clear();
   }
}
