import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'toDoApp for SD';

  email: string = 'test';
  password: string = 'test';

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.login();
  }

  login(){
    const user = {email: this.email, password: this.password};
    console.log(user);

    this.userService.signIn(user).subscribe(
      (loggedUser) => {
        this.userService.setToken(loggedUser.token);
        console.log("Login correcto");
        console.log(loggedUser.token);
      },
      (err) => {
        console.error("Error en el login");
        console.error(err);
      }
    );
  }

}
