import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/components/users-management/User';
import { Store } from '@ngrx/store';
import { setUsers } from '../../store/user.actions'
@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['../../app.component.css']
})
export class UsersManagementComponent implements OnInit {

  constructor(private _userService: UserService, private _store: Store<{ userManage: User[]}>) {
    this._userService.getListUsers().subscribe((source) => _store.dispatch(setUsers({listUsers: source})));
  }

  ngOnInit(): void {}

}
