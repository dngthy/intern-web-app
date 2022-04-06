import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  validateEmail(email: string) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return email.match(emailRegex);
  }
  validateUserName(username: string) {
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    return  username.length >= 6 && usernameRegex.test(username);
  }

  validatePassword(password: string) {
    let passRegex = /^[A-Za-z0-9]\w{7,14}$/;
    return password.match(passRegex);
  }


}
