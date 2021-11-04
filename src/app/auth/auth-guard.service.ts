import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(): boolean {
    if (localStorage.getItem("loggedIn") === "true") {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
