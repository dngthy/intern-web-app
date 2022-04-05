import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ValidationService } from 'src/app/services/validation.service';
import { User } from 'src/app/components/users-management/User';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  listUsers: User[] = [];

  constructor(private _userService: UserService, private _validation: ValidationService) {}

  ngOnInit(): void {
    this.getListUsersDefault()
  }

  getListUsersDefault() {
    this._userService.getListUsers().subscribe((res) => (this.listUsers = res));
  }

  createUser(user:any) {
    this._userService
    .addUser({
      username: user.username,
      age: user.age,
      gender: user.gender,
      email: user.email,
      address: user.address
    })
    .subscribe({
      next: () => {
        this._userService
          .getListUsers()
          .subscribe((res) => (this.listUsers = res));
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }

}
