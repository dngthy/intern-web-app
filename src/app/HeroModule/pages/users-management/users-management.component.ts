import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/HeroModule/pages/users-management/User';
import { Store } from '@ngrx/store';
import { getUsersFromApi } from 'src/app/CoreModule/store/actions/user.actions'
import { getHeros } from 'src/app/CoreModule/store/actions/hero.action';
@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['../../../app.component.css']
})
export class UsersManagementComponent implements OnInit {

  constructor(private _store: Store<{ userManage: User[]}>) {}

  ngOnInit(): void {
    this._store.dispatch(getHeros());
  }

}
