import { FormCreateModule } from 'src/app/components/form-create/form-create.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManagementComponent } from './users-management.component';
import { UsersListModule } from '../users-list/users-list.module';

@NgModule({
  declarations: [UsersManagementComponent],
  imports: [CommonModule, UsersListModule, FormCreateModule],
  exports: [UsersManagementComponent],
})
export class UsersManagementModule {}
