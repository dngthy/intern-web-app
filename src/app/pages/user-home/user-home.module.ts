import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { UserHomeComponent } from './user-home.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzTabsModule,
    FormsModule
  ],
  exports: [UserHomeComponent]
})
export class UserHomeModule { }
