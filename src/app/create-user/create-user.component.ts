import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './User';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {

  listUsers: User[] = [];

  username: string = '';
  age: number = 0;

  isVisibleModal = false;

  username_update: string = '';
  age_update:number =0;

  clearInput(){
    this.username='';
    this.age=0;
  }
  showModal(): void {
    this.isVisibleModal = !this.isVisibleModal;
  }
  showModalWithParam(user: User): void {
    this.isVisibleModal = !this.isVisibleModal;
    this.username_update = user.username;
    this.age_update = user.age;
  }
  handleOk(): void {
    this.isVisibleModal = false;
    this.updateUser({username: this.username_update, age: this.age_update})
  }
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getListUsers().subscribe(res => this.listUsers=res);
  }

  createUser() {
    this._userService.addUser({ username: this.username, age: this.age }).subscribe({
      next: () => {
        this._userService.getListUsers().subscribe(res => this.listUsers=res);
      },
      error: (err) => {
        console.log('err', err)
      }
    })
    this.clearInput()
  }

  getListUsersDefault() {
    this._userService.getListUsers().subscribe(res => this.listUsers=res);
  }

  updateUser(user:User){
    this._userService.updateUser(user).subscribe({
      next:()=>{
        this._userService.getListUsers().subscribe(res => this.listUsers=res);
      }
    })
    this.clearInput()
  }

  deleteUser(username : string){
    this._userService.deleteUser(username).subscribe({
      next: () => {
        this._userService.getListUsers().subscribe(res => this.listUsers = res);
      }
    })
    this.clearInput()
  }
}
