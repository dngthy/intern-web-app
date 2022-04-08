import { Injectable } from '@angular/core';
import { User } from 'src/app/pages/users-management/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const CONTEXT={
  users: 'http://localhost:4000/users'
}
const ENDPOINT={
  getListUsers: `${CONTEXT.users}/get-list-users`,
  findUser: `${CONTEXT.users}/find-user`,
  createUser: `${CONTEXT.users}/create-user`,
  updateUser: `${CONTEXT.users}/update-user`,
  deleteUser: `${CONTEXT.users}/delete-user`,
  login: `${CONTEXT.users}/login`
}

@Injectable({
  providedIn: 'root',
})

export class UserService {

  user_token = JSON.parse(window.localStorage.getItem('USER_INFO')??'{}').token
  private headers = new HttpHeaders({'authorization':`Bearer ${this.user_token}`});
  constructor(private http: HttpClient ) {}


  addUser(user: User) {
    return this.http.post(ENDPOINT.createUser,user)
  }

  getListUsers() {
    return this.http.get<User[]>(ENDPOINT.getListUsers,{ headers: this.headers})
  }

  findUser(username:string) {
    return this.http.get(`${ENDPOINT.findUser}/${username}`)
  }

  updateUser(user:User) {
    return this.http.patch(`${ENDPOINT.updateUser}/${user.username}`,user,{ headers: this.headers})
  }

  deleteUser(username:string){
    return this.http.delete(`${ENDPOINT.deleteUser}/${username}`,{ headers: this.headers})
  }

  login(user: {username: string, password: string}) {
    return this.http.post(`${ENDPOINT.login}`, user)
  }
}
