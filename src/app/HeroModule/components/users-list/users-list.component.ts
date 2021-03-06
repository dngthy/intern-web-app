import { Component, OnInit  } from '@angular/core';
import { User } from 'src/app/HeroModule/pages/users-management/User';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {updateUser, deleteUser} from 'src/app/CoreModule/store/actions/user.actions'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  isVisibleModal = false;

  listUsers$!: Observable<User[]>
  listUsers!: User[];

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

  constructor(
    private _store:Store<{userManage: User[]}>
  ) {}

  ngOnInit(): void {
    this.listUsers$ = this._store.select('userManage')
    this.listUsers$.subscribe(data => this.listUsers = data)
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
  hasError(){
    for (let mirrorError of Object.values(this.error)){
      if (mirrorError) return true;
    }
    return false;
  }
  showModal(): void {
    this.isVisibleModal = !this.isVisibleModal;
  }

  showModalWithParam(user: User): void {
    this.isVisibleModal = !this.isVisibleModal;
    this.username_update = user.username;
    this.age_update = user.age;
    this.address_update = user.address;
    this.email_update = user.email;
    this.gender_update = user.gender;
    this.firstName_update = user.firstName;
    this.lastName_update = user.lastName;
    this.password_update = user.password;
  }

  handleOk(): void {
      this.isVisibleModal = false;
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
}
