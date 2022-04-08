import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _userService: UserService,
     private _router: Router,
     ) { }
  newUser = {
    username:'',
    password:'',
  }
  ngOnInit(): void {
    let existUser = window.localStorage.getItem('USER_INFO')
    if (existUser) {
      this._router.navigateByUrl('/home')
    }
  }

  login(){
    this._userService.login(this.newUser).subscribe({
      next: (res) => {
      window.localStorage.setItem('USER_INFO',JSON.stringify(res));
      this._router.navigateByUrl('/home');
    },
    error: (err) => {}
  })
  }

  redirectToRegister(){
    this._router.navigateByUrl('/register');
  }
}
