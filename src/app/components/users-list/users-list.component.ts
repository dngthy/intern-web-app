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

  error = {
    hasErrorEmail: false,
    hasErrorUpdateEmail: false,
  };

  username_update: string = '';
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

  validateUpdateEmail(email: string) {
    this.error.hasErrorUpdateEmail = !this._validation.validateEmail(email);
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
  }

  handleOk(): void {
    if (!this.error.hasErrorUpdateEmail){
      this.isVisibleModal = false;
      this.updateUser({
        username: this.username_update,
        age: this.age_update,
        gender: this.gender_update,
        address: this.address_update,
        email: this.email_update,
      });
    }
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
