import { Injectable } from '@angular/core';
import { User } from 'src/app/pages/users-management/User';
import { HttpClient } from '@angular/common/http';
const CONTEXT={
  users: 'http://localhost:4000/users'
}
const ENDPOINT={
  getListUsers: `${CONTEXT.users}/getListUsers`,
  findUser: `${CONTEXT.users}/findUser`,
  createUser: `${CONTEXT.users}/createUser`,
  updateUser: `${CONTEXT.users}/updateUser`,
  deleteUser: `${CONTEXT.users}/deleteUser`
}

@Injectable({
  providedIn: 'root',
})

export class UserService {

  listUsers: User[] = [];

  constructor(private http: HttpClient ) {}


  addUser(user: User) {
    return this.http.post(ENDPOINT.createUser,user)
  }

  getListUsers() {
    return this.http.get<User[]>(ENDPOINT.getListUsers)
  }

  findUser(username:string) {
    return this.http.get(`${ENDPOINT.findUser}/${username}`)
  }

  updateUser(user:User) {
    return this.http.patch(`${ENDPOINT.updateUser}/${user.username}`,user)
  }

  deleteUser(username:string){
    return this.http.delete(`${ENDPOINT.deleteUser}/${username}`)
  }

}
