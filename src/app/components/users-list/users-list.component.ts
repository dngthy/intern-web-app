import { Component, Input, OnInit,SimpleChanges  } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ValidationService } from 'src/app/services/validation.service';
import { User } from 'src/app/components/users-management/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input() listUsers!: User[];
  isVisibleModal = false;

  errorForm = {
    hasErrorUpdateFirstName: true,
    hasErrorUpdateLastName: true,
    hasErrorUpdateGender: true,
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
    private _userService: UserService,
    private _validation: ValidationService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.listUsers = changes['listUsers'].currentValue;
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
    let i=0
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
    this._userService.updateUser(user).subscribe({
      next: () => {
        this._userService
          .getListUsers()
          .subscribe((res) => (this.listUsers = res));
      },
    });
  }

  deleteUser(username: string) {
    this._userService.deleteUser(username).subscribe({
      next: () => {
        this._userService
          .getListUsers()
          .subscribe((res) => (this.listUsers = res));
      },
    });
  }
}
