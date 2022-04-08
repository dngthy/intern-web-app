import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteUser, updateUser } from 'src/app/store/actions/user.actions';
import { User } from '../users-management/User';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  visible = false;
  user = JSON.parse(window.localStorage.getItem('USER_INFO')?? '{}')
  errorForm = {
    hasErrorUpdateFirstName: false,
    hasErrorUpdateLastName: false,
    hasErrorUpdateGender: false,
  };
  error = {...this.errorForm};

  username_update: string = '';
  firstName_update: string = '';
  lastName_update: string = '';
  password_update: string = '';
  age_update: number = 0;
  email_update: string = '';
  gender_update: string = '';
  address_update: string = '';

  constructor(private _router: Router, private _store: Store<{userManage: User[]}>) {
    !Object.keys(this.user).length && _router.navigateByUrl('/')
  }

  ngOnInit(): void {
  }

  drawerAction(){
    this.visible = !this.visible;
  }

  logOut(){
    window.localStorage.removeItem('USER_INFO');
    this._router.navigateByUrl('/')
  }

  validateFirstName(firstName: string){
    this.error.hasErrorUpdateFirstName = firstName === ''
  }
  validateLastName(lastName: string){
    this.error.hasErrorUpdateLastName = lastName === ''
  }
  validateGender(gender: string) {
    this.error.hasErrorUpdateGender = gender === ''
  }
  handleOk(): void {
    this.updateUser({
      username: this.username_update.trim(),
      firstName: this.firstName_update.trim(),
      lastName: this.lastName_update.trim(),
      password: this.password_update,
      age: this.age_update,
      gender: this.gender_update.trim(),
      address: this.address_update.trim(),
      email: this.email_update.trim(),
    });
    this.error = {...this.errorForm};
}

updateUser(user: User) {
  this._store.dispatch(updateUser(user));
}

deleteUser(username: string) {
  this._store.dispatch(deleteUser({username}))
}
hasError(){
  for (let mirrorError of Object.values(this.error)){
    if (mirrorError) return true;
  }
  return false;
}
}
