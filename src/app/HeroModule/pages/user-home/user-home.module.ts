import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { UserHomeComponent } from './user-home.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule } from '@angular/forms';
import { HeroListModule } from '../../components/hero-list/hero-list.module';
import { UsersListModule } from '../../components/users-list/users-list.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzTabsModule,
    FormsModule,
    HeroListModule,
    UsersListModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzIconModule,
    NzAvatarModule
  ],
  exports: [UserHomeComponent]
})
export class UserHomeModule { }
