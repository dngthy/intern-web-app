import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/pages/users-management/User';
import { Store } from '@ngrx/store';
import { getUsersFromApi } from '../../store/actions/user.actions'
@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['../../app.component.css']
})
export class UsersManagementComponent implements OnInit {

  constructor(private _store: Store<{ userManage: User[]}>) {}

  ngOnInit(): void {
    this._store.dispatch(getUsersFromApi())
  }

}
