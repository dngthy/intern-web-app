import { createHero, getHeros } from './../../../CoreModule/store/actions/hero.action';
import { Hero } from './../../components/hero-list/Hero';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteUser, updateUser } from 'src/app/CoreModule/store/actions/user.actions';
import { User } from '../users-management/User';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  visible = false;
  user = JSON.parse(window.localStorage.getItem('USER_INFO')?? '{}')

  newHeroForm = {
    id: 0,
    name: ''
  }

  newHero = {...this.newHeroForm}
  constructor(
    private _router: Router,
    private _store: Store<{heroManage: Hero[]}>,
    private message: NzMessageService
    ) {
    if (!Object.keys(this.user).length) {
      _router.navigateByUrl('/')
    }
    else {
      this._store.dispatch(getHeros())
    }
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

  createHero(){
    this._store.dispatch(createHero({payload: this.newHero}));
    this.clearInput()
    this.message.create('success', 'Create successfully');
  }

  clearInput(){
    this.newHero = {...this.newHeroForm}
  }

  hasError(){
    return !this.newHero.name.length
  }
}
