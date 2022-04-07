import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { NameCapitalize } from 'src/app/pipes/namePipe.pipe';
import { FormsModule } from '@angular/forms';
import { UserManageEffects } from 'src/app/store/effects/user-manage.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [UsersListComponent, NameCapitalize],
  imports: [CommonModule, FormsModule,EffectsModule.forFeature([UserManageEffects])],
  exports: [UsersListComponent],
})
export class UsersListModule {}
