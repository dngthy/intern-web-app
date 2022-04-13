import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateModule } from 'src/app/HeroModule/components/form-create/form-create.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormCreateModule,
    FormsModule,
    NzMessageModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
