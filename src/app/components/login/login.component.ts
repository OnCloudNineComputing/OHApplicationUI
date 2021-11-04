import {Component} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'coms-e6156 login';
  usersService: UsersService;

  constructor(usersService: UsersService, public router: Router) {
    this.usersService = usersService;
  }

  ngOnInit(): void {
  }

  login() {
    this.usersService.login().subscribe((data: any) => {
      if (data['url']) {
        localStorage.setItem("loggedIn", "true");
        this.usersService.oAuth();
      }
    });
  }
}
