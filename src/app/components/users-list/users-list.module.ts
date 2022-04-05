import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { NameCapitalize } from 'src/app/pipes/namePipe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListComponent, NameCapitalize],
  imports: [CommonModule, FormsModule],
  exports: [UsersListComponent],
})
export class UsersListModule {}
