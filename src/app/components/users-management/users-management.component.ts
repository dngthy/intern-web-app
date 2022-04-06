import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/components/users-management/User';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['../../app.component.css']
})
export class UsersManagementComponent implements OnInit {
  listUsers: User[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getListUsersDefault()
  }

  getListUsersDefault() {
    this._userService.getListUsers().subscribe((res) => (this.listUsers = res));
  }

  createUser(user:any) {
    this._userService
    .addUser({
      username: user.username.trim(),
      firstName: user.firstName.trim(),
      lastName: user.lastName.trim(),
      password: user.password.trim(),
      age: user.age,
      gender: user.gender.trim(),
      email: user.email.trim(),
      address: user.address.trim()
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
