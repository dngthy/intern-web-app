import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  validateEmail(email: string) {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    return email.match(validRegex);
  }
}
