import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateModule } from 'src/app/components/form-create/form-create.module';
import { RegisterComponent } from './register.component';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormCreateModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
