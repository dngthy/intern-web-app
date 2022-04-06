import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';
import { User } from 'src/app/components/users-management/User';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  @Input() listUsers!: User[];
  @Output() submit = new EventEmitter();
  errorForm = {
    hasErrorUsername: true,
    hasErrorFirstName: true,
    hasErrorLastName: true,
    hasErrorPassword: true,
    hasErrorConfirmPassword: true,
    hasErrorGender: true,
    hasErrorEmail: true,
  };
  error = {...this.errorForm};
  newUserForm: User = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    age: 0,
    email: '',
    gender: '',
    address: '',
  };
  newUser: User = {...this.newUserForm}
  confirmPassword: string = '';
  constructor(private _validation: ValidationService) { }

  ngOnInit(): void {
  }
  clearInput() {
    this.newUser = {...this.newUserForm};
    this.error = {...this.errorForm};
    this.confirmPassword = '';
  }
  validateEmail(email: string){
    this.error.hasErrorEmail = email === '' || !this._validation.validateEmail(email)
  }
  validateUserName(username: string){
    this.error.hasErrorUsername = username === '' || !this._validation.validateUserName(username)
  }
  validateFirstName(firstName: string){
    this.error.hasErrorFirstName = firstName === ''
  }
  validateLastName(lastName: string){
    this.error.hasErrorLastName = lastName === ''
  }
  validatePassword(password: string){
    this.error.hasErrorPassword = password === '' || !this._validation.validatePassword(password)
  }
  validateConfirmPassword(password: string){
    this.error.hasErrorConfirmPassword = password === '' || password !== this.newUser.password
  }
  validateGender(gender: string) {
    this.error.hasErrorGender = gender === ''
  }
  hasError(){
    let i=0
    for (let mirrorError of Object.values(this.error)){
      if (mirrorError) return true;
    }
    return false;
  }
  createUser() {
      this.submit.emit(this.newUser);
      this.clearInput();
  }
}
