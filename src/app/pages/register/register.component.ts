import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  redirectToLogin(){
    this._router.navigateByUrl('/')
  }
}
