import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateModule } from 'src/app/components/form-create/form-create.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormCreateModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
