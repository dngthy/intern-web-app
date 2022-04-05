import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}
