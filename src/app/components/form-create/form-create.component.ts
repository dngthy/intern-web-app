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
  @Output() submit=new EventEmitter();
  error = {
    hasErrorEmail: false,
    hasErrorUpdateEmail: false,
  };
  newUser: User = {
    username: '',
    age: 0,
    email: '',
    gender: '',
    address: '',
  };
  constructor(private _validation: ValidationService) { }

  ngOnInit(): void {
  }
  clearInput() {
    this.newUser = {
      username: '',
      age: 0,
      email: '',
      gender: '',
      address: '',
    };
    this.error = {
      hasErrorEmail: false,
      hasErrorUpdateEmail: false,
    };
  }
  validateEmail(email: string){
    this.error.hasErrorEmail=!this._validation.validateEmail(email)
  }
  createUser() {
    if (!this.error.hasErrorEmail) {
      this.submit.emit(this.newUser);
      this.clearInput();
    }
  }
}
